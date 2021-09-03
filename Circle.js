//CREATED BY AADI GOLECHA ON 30 AUGUST
//Circle class to create any circular object

class Circle 
{
     //constructor with 3 perameter
    constructor(x, y,r)
    {

        //making every object of the class movable 
        var options = 
        {
            isStatic : false
        }

        this.body = Bodies.circle(x, y, r, options);
        this.r = 70;

        World.add(world, this.body);
    }


    //function to show the object
    show()
    {
        var pos = this.body.position;

        push();
        ellipse(pos.x, pos.y, this.r);
        pop();
    }
}