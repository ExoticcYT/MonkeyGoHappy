
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,450)
  
  //creating monkey
  monkey = createSprite(50,300,100,10);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,400,1000,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background(255);
  
  if(ground.x<0) {
    ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y >=200) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 1;
  
  monkey.collide(ground);
  
  monkey.debug = true;
  if(frameCount % 100 === 0) {
    spawnObstacles(); 
  }
  
  if(frameCount % 120 === 0) {
   spawnFood(); 
  }
  
  stroke("black");
  textSize = 20;
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time = " + survivalTime, 200, 10);
  
  drawSprites();
}

function spawnObstacles() {
  obstacle = createSprite(500,360,10,10);
  obstacle.addImage(obstaceImage);
  obstacle.scale = 0.2;
  obstacle.setCollider("circle", 0,0,210);
  obstacle.debug = true;
  obstacle.velocityX = -5;
  obstacle.lifetime = 400;
}

function spawnFood() {
  banana = createSprite(500, 125, 20, 20);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5
  banana.y = Math.round(random(50,200));
  banana.debug = true;
  banana.lifetime = 400;
}