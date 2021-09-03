//CREATED BY AADI GOLECHA ON 30 AUGUST
//BALL BLOWER 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

// declared thge components of the blower and the ball
var blower_stick, blower;
var blower_button, button; 
var ball;

function setup() 
{
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;

  //created both of the components on blower
  blower_stick = new Rects(300, 350, 300, 20);
  blower = new Rects(500, 290, 125, 150);

  //created the ball
  ball = new Circle(500,180,35);

  //created the button to blow th eball
  button = createButton('Click to Blow');
  button.position(450,400);
  button.mousePressed(blow);

}

function draw() {
  //setting the background to black
  background("black");  
  Engine.update(engine);

  //showing the stick and the head of the blower
  fill("#00bbff");
  blower_stick.show();

  fill("#447bfc")
  blower.show();


  //showing ball
  fill("#0e008c")
  ball.show();

  drawSprites();
}


//function to blow the ball
function blow ()
{
  Matter.Body.applyForce(ball.body, {x : 0, y : 0},{x : 0, y : 0.4});
}