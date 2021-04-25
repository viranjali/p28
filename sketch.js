
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,
mango7,mango8,mango9,mango10,mango11;
var world,boy;
var stone;
var launcher;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1000,100,30);
	mango2=new mango(1140,90,20);
	mango3=new mango(900,180,30);
	mango4=new mango(1100,40,30);
	mango5=new mango(1020,190,30);
	mango6=new mango(1160,200,30);
	mango7=new mango(1230,220,20);
	mango8=new mango(1080,210,20);
	mango9=new mango(970,250,20);
	mango10=new mango(1110,140,30);
	mango11=new mango(1190,130,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	stone=new Stone(232,418,20);

	launcher = new Launcher(stone.body, {x:232, y:418});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);

  treeObj.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  groundObject.display();
  launcher.display();

  stone.display();

}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
    
}
 function keyPressed() {
	 if (keyCode === 32) {
     Matter.Body.setPosition(stone.body, {x:232, y:418}) 
	 launcher.attach(stone.body);
	}
 }

  
   function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
    stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
  }
  













