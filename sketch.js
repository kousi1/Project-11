var ship_moving,sea_image,sea,ship
function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_image = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(0,170,400,400);
  sea.addImage(sea_image);
  sea.scale = 0.3;
  sea.velocityX = -3; 
  ship = createSprite(70,220,20,20);
  ship.addAnimation("moving",ship_moving);  
  ship.scale = 0.2;
}
  
  function draw() {
  background("blue");
  if(sea.x<0){
    sea.x = 400;
  }

  drawSprites();
}