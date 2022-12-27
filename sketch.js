var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var astronaut, astronautImg
function preload(){
bgImg = loadImage("assets/background.jpg")
astronautImg = loadImage("assets/astronaunt png.png")
asteroidImg = loadImage("assets/asteroid.png")
}

function setup(){
createCanvas (1000,800)
//background image
ground = createSprite(165,485,200,600);
ground.addImage(bgImg);
ground.scale = 1.5

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
astronaut = createSprite(100,720,20,50);
astronaut.addImage("astronaut",astronautImg);
astronaut.scale = 0.2;

asteroidGroup = new Group()

}

function draw() {
  
  background("black");
  ground.velocityX = -5;
        if(ground.x < 0){
        ground.x = ground.width/2;
        
        }
          //making the hot air balloon jump
          if(keyDown("UP_ARROW")) {
            astronaut.velocityY = -2 ;
             
          }

          if(keyDown("DOWN_ARROW")) {
            astronaut.velocityY = +2 ;
             
          }


          astronaut.velocityX = 1.5;

          //adding gravity
          //astronaut.velocityY = astronaut.velocityY + 2;
   
        drawSprites();
        spawnAsteroids();
        
}

function spawnAsteroids(){
  if (frameCount % 60 === 0) {
    var asteroid = createSprite(width+20,height-300,40,10);
    asteroid.y = Math.round(random(100,700));
    asteroid.addImage(asteroidImg);
    asteroid.scale = 0.2;
    asteroid.velocityX = -3;
    asteroid.depth = astronaut.depth +1; 
    asteroidGroup.add(asteroid)
}
}