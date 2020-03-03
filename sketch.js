//https://diyaan.github.io/BrickGame/
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var engine; 
var world;
var ball;
var paddle

function setup() {
  createCanvas(400, 400);

   engine = Engine.create();
   world = engine.world;
   ball = Bodies.circle(200 , 10 , 10);
   paddle = Bodies.rectangle(150 , 200 , 100 , 20 , {isStatic:true} );
   World.add(world , ball);
   World.add(world , paddle);
   Engine.run(engine);
}

var x=150;
var y=150;
function draw() {
  background(220);
  rect(paddle.position.x , paddle.position.y  , 100 , 20);
  if (keyIsDown(LEFT_ARROW) && x>5)
  {
  	paddle.position.x=paddle.position.x-5;
  }

   if (keyIsDown(RIGHT_ARROW) && x<295)
  {
  	paddle.position.x=paddle.position.x+5;
  }

  circle(ball.position.x , ball.position.y , 10);

}