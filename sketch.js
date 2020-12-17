var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var staticBody1, staticBody2, staticBody3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {

	
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	staticBody1 = createSprite(400,655,200,10);
	staticBody1.shapeColor = "blue";
	staticBody2 = createSprite(300,635,10,50);
	staticBody2.shapeColor = "blue";
	staticBody3 = createSprite(500,635,10,50);
	staticBody3.shapeColor = "blue";


	engine = Engine.create();
	world = engine.world;

	var packageBody_option={
		restitution: 1.0 
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	
  
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0)
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


																																									
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
	

	
  }
}



