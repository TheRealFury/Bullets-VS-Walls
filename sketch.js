var bullet;
var crashWall;
var State = 0;
var speed, weight, thickness;
var damage;

function setup() {

  speed = random(223, 321);
  weight = random(30,52);
  thickness = random(22,83);

  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 5);
  bullet.shapeColor = color('white');

  crashWall = createSprite(1200, 200, thickness, 200);
  crashWall.shapeColor = color(80,80,80);
}

function draw() {
  background('black');  
  drawSprites();
if(State == 0){
    bullet.velocityX = speed;
  }
  if(crashWall.x - bullet.x < (bullet.width + crashWall.width)/2){
    bullet.velocityX = 0;
    State = 1;
  }
if(State == 1){
  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
  if(damage < 10){
    bullet.shapeColor = color('green');
    crashWall.shapeColor = color('green');
  }
  if(damage > 10){
    bullet.shapeColor = color('red');
    crashWall.shapeColor = color('red');
  }
}
}