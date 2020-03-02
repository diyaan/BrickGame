function setup() {
  createCanvas(400, 400);
}

var x=150;
var y=150;
function draw() {
  background(220);
  rect(x , 300 , 100 , 20);
  if (keyIsDown(LEFT_ARROW) && x>5)
  {
  	x=x-5;
  }

   if (keyIsDown(RIGHT_ARROW) && x<295)
  {
  	x=x+5;
  }

  circle(200 , y , 10);

  if (keyIsDown(UP_ARROW) && y>5)
  {
  	y=y-5;
  }

   if (keyIsDown(DOWN_ARROW) && y<390)
  {
  	y=y+5;
  }
}