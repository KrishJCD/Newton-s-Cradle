
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var wall,world;
var rope1,rope2,rope3,rope4,rope5;
var ball1,ball2,ball3,ball4,ball5;
function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	wall=new Wall(280,100,200,50);
	//Create the Bodies Here.
	ball1=new Ball(200,300,40);
	ball2=new Ball(240,300,40);
	ball3=new Ball(280,300,40);
	ball4=new Ball(320,300,40);
	ball5=new Ball(360,300,40);


	rope1=new Rope(ball1.body,wall.body,-40*2,0);
	rope2=new Rope(ball2.body,wall.body,-20*2,0);
	rope3=new Rope(ball3.body,wall.body,-0*2,0);
	rope4=new Rope(ball4.body,wall.body,20*2,0);
	rope5=new Rope(ball5.body,wall.body,40*2,0);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  wall.display();
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:200});
	}
}

