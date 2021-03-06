const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 275, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	//create box
	box1 = new Box(windowWidth/2, windowHeight - 150, windowWidth/6, 25, {isStatic:true});
	box2 = new Box(windowWidth/2.5, windowHeight - 150, 25, windowHeight/6, {isStatic:true});
	box3 = new Box(windowWidth/1.8, windowHeight - 150, 25, windowHeight/6, {isStatic:true});


	packageBody = Bodies.circle(width/2 , 275 , 5 , {restitution:0.0, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2,height - 10,width,100 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0, 73, 83);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  box1.display();
  box2.display();
  box3.display();

  keyPressed(); 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	packageBody.restitution
  }
}



