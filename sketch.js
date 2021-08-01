var runner
var runnerimg
var path
var pathimg

function preload(){
pathimg=loadImage("path.png")
runnerimg=loadAnimation("Runner-1.png","runner-2.png")
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200,20,20)
  path.scale=1
  path.addImage(pathimg)
  path.velocityY=5

  runner=createSprite(200,200,20,20)
  runner.scale=0.1
  runner.addAnimation("runnerimg",runnerimg)
}

function draw() {
  background('white');
  if(path.y > 400){
    path.y = path.height/10;  
    }
  drawSprites()

}
