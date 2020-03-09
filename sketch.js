//https://diyaan.github.io/BrickGame/
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;
var Render = Matter.Render;
var engine; 
var world;
var ball;
var paddle;
var rows=5;
var columns=8;
var brickBodies=[];
var paddleWidth=100;
var paddleHeight=15;
var boundryleft
var boundryright
var canvasWidth=418;
var canvasHeight=400;
paddlePosition=canvasHeight-50;

//to color : fill( red , green , blue )

var brick;
function setup() {
	createCanvas(canvasWidth, canvasHeight);

	engine = Engine.create();
	world = engine.world;
	//world.gravity.scale=0.0005;
	ball = Bodies.circle(150 , 250 , 5 , {restitution:1.5, label:'ball'});
	paddle = Bodies.rectangle(150 , paddlePosition , paddleWidth , paddleHeight , {isStatic:true,label:'paddle'} );
	World.add(world , ball);
	World.add(world , paddle);
	
	//boundryleft = Bodies.rectangle( 75 , canvasHeight/2 , canvasHeight , 2 , {isStatic:true} );
	//boundryright = Bodies.rectangle( canvasWidth-75 , canvasHeight/2 , canvasHeight , 2 , {isStatic:true} );

	//Add all your bricks


	for(i=0;i<columns;i=i+1)
	{
		brickBodies[i]=[];
		for (j=0 ;j<rows;j=j+1)

		{
			brick=Bodies.rectangle(27+(52*i) , 12 + (22*j) , 50 , 20 , {isStatic:true,'i':i, 'j':j, label:'brick'});
			brickBodies[i][j]=brick;
			World.add(world , brick);
			 
			
		}

	}
	// Find out which bodies Collided

	Matter.Events.on(engine,'collisionStart',collisionStartEvent);
	Matter.Events.on(engine,'collisionEnd',collisionEndEvent); 
	Engine.run(engine);
}

var x=150;
var y=150;



var rowColors = [ 'red' , 'green' , 'yellow' , 'blue' , 'magenta' , 'pink' , 'brown' , 'black']
function draw() 
{
	Engine.update(engine);	
	rectMode(CENTER);
	ellipseMode(CENTER)
	background(220);
	var i,j 
	//console.log()
	
	//console.log(a)
	if (keyIsDown(LEFT_ARROW) && paddle.position.x>paddleWidth/2)
	{
		Body.setPosition(paddle,{x:paddle.position.x-5 , y:paddle.position.y})
	}

	if (keyIsDown(RIGHT_ARROW) && paddle.position.x<width-paddleWidth/2)
	{
		Body.setPosition(paddle,{x:paddle.position.x+5 , y:paddle.position.y})
	}
	fill( 255 )
	rect(paddle.position.x , paddle.position.y, paddleWidth, paddleHeight);

    fill( 255 )
	circle(ball.position.x , ball.position.y , 10);

	for(i=0;i<columns;i=i+1)
	{
		fill(rowColors[i]);
		//brickBodies[i]=[];
		for (j=0 ;j<rows;j=j+1)
		{
		 	
		 	if(brickBodies[i][j] != null)
		 	{
				rect(brickBodies[i][j].position.x , brickBodies[i][j].position.y , 50 , 20);
			}
		}

	}


}


function collisionStartEvent(event)
{
	pairs=event.pairs[0];
	var i,j;

	// If the colliding Object is a brick
	if(pairs.bodyA.label=='brick' && pairs.bodyB.label=='ball')
	{
		i=pairs.bodyA.i;
		j=pairs.bodyA.j;
		Matter.Body.setStatic(brickBodies[i][j], false);
	}

	if(pairs.bodyB.label=='brick' && pairs.bodyA.label=='ball')
	{
		i=pairs.bodyB.i;
		j=pairs.bodyB.j;
		Matter.Body.setStatic(brickBodies[i][j], false);
	}

	// If the brick Collides with the paddle
	if(pairs.bodyA.label=='brick' && pairs.bodyB.label=='paddle')
	{
		i=pairs.bodyA.i;
		j=pairs.bodyA.j;
		World.remove(world, brickBodies[i][j]);
		brickBodies[i][j]=null;

	}

	if(pairs.bodyB.label=='brick' && pairs.bodyA.label=='paddle')
	{
		i=pairs.bodyB.i;
		j=pairs.bodyB.j;
		World.remove(world, brickBodies[i][j]);
		brickBodies[i][j]=null;
	}

	



	


}

function collisionEndEvent(event)
{
	pairs=event.pairs[0];
	var i,j;

	

	if(pairs.bodyA.label=='ball' && pairs.bodyB.label=='paddle')
	{
		Matter.Body.setVelocity(pairs.bodyA, {x:random(-1,1), y:pairs.bodyA.velocity.y})

	}

	if(pairs.bodyB.label=='ball' && pairs.bodyA.label=='paddle')
	{
		Matter.Body.setVelocity(pairs.bodyB, {x:random(-1,1),y:pairs.bodyA.velocity.y})
	}




	


}


