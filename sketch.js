
var monkey , monkey_running;
var bananaImage, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime;
var ground;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,450,10)
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  bananaGroup = new Group ();
  obstacleGroup = new Group();
  
  

  
}


function draw() {
  
  background(255);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time : "+ survivalTime,100,50);
  
  food();
  blocage();
  
  
  if(ground.x<400){
    ground.x = ground.width/2;
  }
  
  if (keyDown("space")&&monkey.y>200) {
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.9;
  monkey.collide(ground);
  
  
  //draw the Sprites
  drawSprites();
}
  // creating function for banana
  function food (){
  if(frameCount % 80 === 0){
    var banana = createSprite(400,0,50,50)
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 80;
    bananaGroup.add(banana);
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
  }

   // creating function for obstacles
   function blocage (){
     if (frameCount % 300 === 0) {
       var obstacle = createSprite(400,315,10,10);
       obstacle.addImage(obstacleImage);
       obstacle.velocityX = -5;
       obstacle.lifetime = 80;
       obstacle.scale= 0.2;
       
     }
   
}

  
  
  






