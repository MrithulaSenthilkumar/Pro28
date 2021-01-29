
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var mango1,mango2,mango3,mango4,mango5,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var distance;
var slingshot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1005,70,30);
	mango3=new mango(1050,140,30);
	mango4=new mango(1120,189,30);
	mango5=new mango(1025,209,30);
	mango6=new mango(995,150,30);
	mango7=new mango(887,210,30);
	mango8=new mango(950,240,30);
	mango9=new mango(1225,140,30);
	mango10=new mango(1234,230,30);

  stone=new Stone(240,420,40);

	treeObj=new tree(1050,580);
  groundObject=new ground(width/2,600,width,20);
  slingshot=new Slingshot(stone.body,{x:250, y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

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
  slingshot.display();
  stone.display();

  groundObject.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function detectollision(Lstone, Lmango){
  mangobodyposition=Lmango.body.position;
  stonebodyposition=Lstone.body.position;

  distance=dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y)
  
  if(distance<=Lmango.r+Lstone.r){
        
    Matter.Body.setStatic(Lmango.body,false);
  }
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:250, y:420})
    slingshot.attach(stone.body);
  }
}