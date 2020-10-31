var mario;
var brick;
var ground;
var star;
var mushroom;
var enemy;
var mysteryBox;
var marioImage,groundImage,brickImage,starImage
var bg
function preload(){
marioImage=loadAnimation("image/right1.jpg","image/right2.jpg","image/right3.jpg")
brickImage=loadImage("image/brick.png")
starImage=loadImage("image/Star.png")

bg=loadImage("image/background.png")
}
function setup() {
  createCanvas(800,400);

    ground=createSprite(120,353,1800,50);
    mario=createSprite(50,310,10,10);
    brick=createSprite(200,200,10,10);
    star=createSprite(150,150);
  
    mario.scale=0.1;
    ground.scale=0.1;
    brick.scale=0.2;
    star.scale=0.1;
    ground.visible=false;
    
    if(keyDown(LEFT_ARROW)){
      mario.velocityX=-2
      mario.velocityY=0
      }
}

function draw() {
background(bg)
mario.addAnimation("mario",marioImage)
brick.addImage("brick",brickImage)
star.addImage("star",starImage)

  jump()
  mario.collide(ground); 
  mario.collide(brick);
  mario.x=ground.x
  drawSprites();
}
function jump(){
  if(keyDown("space")){
  mario.velocityY=-12;
  }
 mario.velocityY=mario.velocityY+0.8
}
