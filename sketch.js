//https://diyaan.github.io/BrickGame/
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var engine; 
var world;
var ball;
var paddle

function setup() {
  createCanvas(418, 400);

   engine = Engine.create();
   world = engine.world;
   ball = Bodies.circle(150 , 10 , 5 , {restitution:1.5});
   paddle = Bodies.rectangle(150 , 350 , 100 , 20 , {isStatic:true} );
   World.add(world , ball);
   World.add(world , paddle);
   Engine.run(engine);
}

var x=150;
var y=150;
var rows=5;
var columns=8;

function draw() {
	rectMode(CENTER);
	ellipseMode(CENTER)
  background(220);
  var i,j 

for(i=0;i<columns;i=i+1)
{

  for (j=0 ;j<rows;j=j+1)

    {

        rect(27+(52*i) , 12 + (22*j) , 50 , 20)

    }

    }
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

