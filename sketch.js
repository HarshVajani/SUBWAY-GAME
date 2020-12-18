var Rose,Rose_Img;
var key,key_Img;
var track,trackImg;
var gameState="play";
var coin,coin_Img;
var coinsGroup,obstaclesGroup,keysGroup;

function preload(){
  trackImg=loadImage("Subway Background.jpg");
  Rose_Img=loadImage("Rose.jpg");
  coin_Img=loadImage("COIN.jpg");
  key_Img=loadImage("KEY.jpg");
  obstacle_Img=loadImage("Obstacle.png");
}
function setup() {
  createCanvas(600,600);
//var coin=createSprite(10,150,20,20);
//var key=createSprite(400,300,20,20);
track = createSprite(600,600);
track.addImage("track",trackImg);
track.velocityY = 1; 
//track.x=track.width/2;
track.scale=2

 Rose = createSprite(200,200,50,50);
Rose.scale = 0.3;
Rose.addImage("Rose", Rose_Img);

coinssGroup = new Group();
obstaclesGroup = new Group();
keysGroup = new Group();
}

function draw(){
  background(0);
  if (gameState === "play") {
    if(keyDown("left_arrow")){
      Rose.x = Rose.x - 3;
    }
    
    if(keyDown("right_arrow")){
      Rose.x = Rose.x + 3;
    }
    
    if(keyDown("space")){
      Rose.velocityY = -10;
    }
    
    Rose.velocityY = Rose.velocityY + 0.8;
    
    if(track.y > 400){
      track.y = 300
    }
   spawnObstacles();
   spawnCoins();
   spawnKeys();

    
    //ObtaclesGroupGroup.collide(ghost);
    if(obstaclesGroup.isTouching(Rose)){
      Rose.velocityY = 0;
      Rose.destroy();
      gameState = "end"
    }
    drawSprites();
  }
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}
function spawnCoins(){
  if (frameCount % 60 === 0) { 
    coin = createSprite(200,-50); 
    coin.y = Math.round(random(10,60));
    coin.addImage("coin",coin_Img);
    coinsGroup.add(coin)
      coin.scale = 0.5;
       coin.velocityY = -3; 
       coin.lifetime=100;
       //assign lifetime to the variable coin.lifetime = 134;
}
}

function spawnKeys(){
  if (frameCount % 100 === 0) { 
    key = createSprite(200,200,10,40); 
    key.y = Math.round(random(10,60));
    key.addImage("key",key_Img);
    key.scale = 0.3;
       key.velocityY= -3; 
       keysGroup.add(key);
       key.lifetime=100;
       //assign lifetime to the variable key.lifetime = 134;
}
}

function spawnObstacles(){
  if (frameCount % 150 === 0) { 
    obstacle = createSprite(500,200,10,40); 
    obstacle.y = Math.round(random(10,60));
    obstacle.addImage("obstacle",obstacle_Img);
    obstacle.scale = 0.3;
       obstacle.velocityY= -3; 
       obstaclesGroup.add(obstacle);
       obstacle.lifetime=100;
       //assign lifetime to the variable obstacle.lifetime = 134;
}
}