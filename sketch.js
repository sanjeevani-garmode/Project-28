
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone;

function preload(){
	boy=loadImage("images/boy.png");
    stone=loadImage("images/stone.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  image(stone ,200,380,50,50);  

  treeObj.display();
  mango1.display();
  stone.display();
  groundObject.display();
}

function mouseDragged(){
	Matter.BodyA.setPosition(stone.body , {x: mouseX , y: mouseY});
}
