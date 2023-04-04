const clockEl=document.getElementsByClassName("clock")[0]
const dialLines=document.getElementsByClassName("diallines")

var colors = ['red', 'green', 'blue', 'orange', 'yellow'];



for (var i = 1; i < 60; i++) {
  let newline=document.createElement('div')
newline.className='diallines'
clockEl.appendChild(newline)
dialLines[i].style.transform = "rotate(" + 6 * i + "deg)"; 
}

var naBtn = document.getElementById('nabutton');
naBtn.addEventListener('click', newActivity);


function newActivity(){
  alert("jello")
  n=document.getElementsByClassName('activity').length

  var newActivityEl = document.querySelector('.activity');
  var cloneActivity= newActivityEl.cloneNode(true);
  cloneActivity.style.display='block'
  document.querySelector('.activity-bar').appendChild(cloneActivity)

  var newSector =document.createElement('div')
  newSector.classList.add('sector');
  newSector.style.backgroundColor=colors[n%5]
  document.getElementById('sectors').appendChild(newSector);

  var activity = document.getElementsByClassName('activity')[n]
  var input = activity.getElementsByTagName('input')
  var button = activity.getElementsByTagName('button')
  

  input[1].addEventListener('input',function () {setSector(getElementIndex(this),false)});
  input[2].addEventListener('input',function () {setSector(getElementIndex(this),false)});
  button[0].addEventListener('click',function () {remove(getElementIndex(this))})


  setStartFromPrev(n)
  setSector(n, false)

}


 
  function setStartFromPrev (n){

      var activity = document.getElementsByClassName('activity')[n]
      var prevActivity = document.getElementsByClassName('activity')[n-1]
      var prevInput =prevActivity.getElementsByTagName('input')
      var input = activity.getElementsByTagName('input')

      var t=prevInput[1].value.split(':').map(Number);

      if(n!==1 & !isNaN(t[1]) & !isNaN(prevInput[2].value)){
      t[1]=(t[1]+ +prevInput[2].value)%60;
      if(t[0]<10) t[0]='0'+t[0]
      if(t[1]<10) t[1]='0'+t[1]
      input[1].value=t[0]+":"+t[1]
      input[2].value = 5;
      return(input)
      }

}


  function getElementIndex (element) {
    return Array.from(element.parentNode.parentNode.children).indexOf(element.parentNode);
  }





function setSector(n,casc){


  

  if(n<document.getElementsByClassName('sector').length)
  {
    if (casc==false) var input = document.getElementsByClassName('activity')[n].getElementsByTagName('input');
  else input = setStartFromPrev(n)

      s0=input[1].value.split(':')
      s0=s0.map(Number)
      var length=input[2].value
    
      if(!(isNaN(length)&isNaN(s0))){
      var x = Math.cos(Math.PI/2-2*Math.PI*(length/60))*150+150;
      var y = -Math.sin(Math.PI/2+2*Math.PI*(length/60))*150+150;
      var sector = document.getElementsByClassName('sector')[n-1];


      if (length>30){
        sector.style.clipPath = "path('M150 150 L150, 0 A150,150 1 0,1 150,300 A150,150 1 0,1 "+ x +','+ y +" Z')"
      }else sector.style.clipPath = "path('M150 150 L150,0 A150,150 1 0,1 "+ x +','+ y +" Z')"

      sector.style.transform = "rotate(" + s0[1]*6 + "deg)"; 
    }
    if ((input[1].value!='')){
    setSector(n+1,true)}
  }





}
function remove(n){
  document.getElementsByClassName('activity')[n].remove()
  document.getElementsByClassName('sector')[n-1].remove()
}





function clock() {
  var weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      date = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear(),
           
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      
      hEl = document.querySelector('.hour-hand'),
      mEl = document.querySelector('.minute-hand'),
      sEl = document.querySelector('.second-hand'),
      dateEl = document.querySelector('.date'),
      dayEl = document.querySelector('.day');
  
      var day = weekday[d.getDay()];
  
  if(month < 9) {
    month = "0" + month;
  }
  
  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
}

setInterval("clock()", 100);
