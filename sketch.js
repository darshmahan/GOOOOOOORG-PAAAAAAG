
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var ball
var dust
function preload(){
dust=loadImage("dustbingreen.png")



}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	ball=new Ball(200,200,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 groundObject.display();
  dustbinObj.display();
 ball.display();
 image(dust,1080,370,270,300);
}
function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})


}

}

