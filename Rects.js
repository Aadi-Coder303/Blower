//CREATED BY AADI GOLECHA ON 30 AUGUST
//Rects class to create any rectangle object

class Rects
{
    //constructor with 4 perameter
    constructor(x,y,w,h)
    {
        //making every object of the class still (static)
        let options = {
            isStatic:true
          };
          
          this.body = Bodies.rectangle(x, y, w, h, options);
          this.w = w;
          this.h = h;
          World.add(world, this.body);
    }


    //function to show the object
    show() 
    {
        var pos = this.body.position;

        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.h);
    }
}