
var star
var fairy
var backgroud
var star
var engine, world;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;




function preload(){ 
  fairy27=loadAnimation("images/fairy1.png","images/fairy2.png")
   //preload the images here
   backgroud7=loadImage("images/starnight.png")
   star7=loadImage("images/star.png")
}

function setup () {
  
  
  createCanvas(800,750);
  backgroud=createSprite(400,375,20,20)
  backgroud.addImage("hha",backgroud7)
  fairy=createSprite(600,550,50,50)
  fairy.addAnimation("fryz",fairy27)
  fairy.scale=0.3
  star=createSprite(650,100,20,20)
  star.addImage("hsgur",star7)
  star.scale=0.4
  engine=Engine.create();
  world=engine.world;
  
  var star_options ={
    isStatic: true
  }
    
  
    starBody = Bodies.rectangle(650,100,20,20,star_options)
  
    World.add(world,star);

  star.x=starBody.x
  star.y=starBody.y
  
  
  
  



}




function draw() {
  background("black");
  Engine.update(engine)
  if(keyDown("space")){
    var star_options={
      isStatic:false}
      starBody.velocityY=2
    }
    if(keyDown("right")){
      fairy.x=fairy.x+3
      }
      if(keyDown("left")){
        fairy.x=fairy.x-3
        }
  
  
  
 drawSprites();
}
