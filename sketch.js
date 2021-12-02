var box;
function setup() {
  createCanvas(800,800);
box=  createSprite(200,200,50,50);
}

function draw() 
{
  background("blue");
drawSprites();
box.velocityX=2;
}




