
var trex ,trex_running;
var edges;
var ground,groundimg;


function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
groundimg = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  edges=createEdgeSprites();


  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale=0.51;


ground=createSprite(200,190,400,10)
ground.addImage(groundimg)
ground.velocityX=-2



}

function draw(){
  background("white")

if   (keyDown("space")){
trex.velocityY=-11
}

trex.velocityY=trex.velocityY+0.51


trex.collide(ground);

if (ground.x<0){
  ground.x=ground.width/2
}

  drawSprites();
}
