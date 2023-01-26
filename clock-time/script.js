const clockEl=document.getElementsByClassName("clock")[0]
const dialLines=document.getElementsByClassName("diallines")


for (var i = 1; i < 60; i++) {
  let newline=document.createElement('div')
newline.className='diallines'
clockEl.appendChild(newline)
dialLines[i].style.transform = "rotate(" + 6 * i + "deg)"; 
}



var input = document.getElementsByTagName("input");
input[1].addEventListener('input',setSector)
input[2].addEventListener('input',setSector)

var naBtn = document.getElementsByTagName("button")[0]
naBtn.addEventListener('click', newActivity)

function newActivity(){
  var newActivityEl = document.querySelector('.activity')
  var clone= newActivityEl.cloneNode(true)
  const parentDiv = document.getElementById("nabutton").parentNode

  parentDiv.insertBefore(clone,document.getElementById("nabutton"));
}


function setSector(){

  var s0 = input[1].value.split(':')

  s0=s0.map(Number)
  var length=input[2].value
  console.log(length)
 
  if(!(isNaN(length)&isNaN(s0))){
  var x = Math.cos(Math.PI/2-2*Math.PI*(length/60))*150+150;
  var y = -Math.sin(Math.PI/2+2*Math.PI*(length/60))*150+150;
  var sector1 = document.querySelector('.sector');
  console.log(x)
  console.log(y)

  if (length>30){
    sector1.style.clipPath = "path('M150 150 L150, 0 A150,150 1 0,1 150,300 A150,150 1 0,1 "+ x +','+ y +" Z')"
  }else sector1.style.clipPath = "path('M150 150 L150,0 A150,150 1 0,1 "+ x +','+ y +" Z')"

  sector1.style.transform = "rotate(" + s0[1]*6 + "deg)"; 
}

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
