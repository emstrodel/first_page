import turtle


if __name__ == '__main__':

    turtle.title('Hi! I\'m Bob the turtle!')
    turtle.setup(width=800, height=800)

    bob = turtle.Turtle(shape='turtle')
    bob.color('orange')

    bob.forward(150)
    bob.left(90)
    bob.forward(150)
    bob.left(90)
    bob.forward(150)
    bob.left(90)
    bob.forward(150)


   


    turtle.exitonclick()