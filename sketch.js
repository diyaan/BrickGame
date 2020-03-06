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
var paddleHeight=10;
var boundryleft
var boundryright
var canvasWidth=418;
var canvasHeight=400;

//to color : fill( red , green , blue )

var brick;
function setup() {
	createCanvas(canvasWidth, canvasHeight);

	engine = Engine.create();
	world = engine.world;
	ball = Bodies.circle(150 , 250 , 5 , {restitution:1.75, label:'ball'});
	paddle = Bodies.rectangle(150 , 375 , paddleWidth , paddleHeight , {isStatic:true,label:'paddle'} );
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
	//console.log(brickBodies);
	Matter.Events.on(engine,'collisionStart', function(event){
		pairs=event.pairs[0];
		if(pairs.bodyA.label=='brick')
		{
			console.log(pairs.bodyA.i, pairs.bodyA.j)
		}

		if(pairs.bodyB.label=='brick')
		{
			console.log(pairs.bodyB.i, pairs.bodyB.j)
		}
		


	});
	Engine.run(engine);
}

var x=150;
var y=150;


function draw() {
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
	fill( 128 , 0 , 0 )
	rect(paddle.position.x , paddle.position.y  , 100 , 20);

    fill( 0 , 0 , 255 )
	circle(ball.position.x , ball.position.y , 10);

	for(i=0;i<columns;i=i+1)
	{
		//brickBodies[i]=[];
		for (j=0 ;j<rows;j=j+1)
		{
			fill( 0 , 255 , 0 )
			rect(brickBodies[i][j].position.x , brickBodies[i][j].position.y , 50 , 20)
		}

	}


}


