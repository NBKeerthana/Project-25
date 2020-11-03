const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,paperBall;
var DustBin;
var paperImage;

function preload()
{
		
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	var ground_options = {
		isStatic:true,
		restitution:0.3,
        friction:0.5,
        density:1.2
	}

	fill ("grey");
	ground=Bodies.rectangle(600,480,1200,20,ground_options);
	World.add(world,ground);


	//Create the Bodies Here.
	paperBall=new Paper (100,100,30);
	DustBin=new Dustbin(800,350,190,250);		

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  paperBall.display();
  rect(ground.position.x,ground.position.y,1200,20);
  DustBin.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});

	}
}
