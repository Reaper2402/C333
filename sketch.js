var boy,boyimg;
var snow;
var ground;
var j =0;
function preload(){
  boyimg = loadAnimation("png/I1.png","png/I2.png","png/I3.png","png/I4.png","png/I5.png","png/I6.png","png/I7.png","png/I8.png","png/I9.png","png/I10.png","png/I11.png","png/I12.png","png/I13.png","png/I14.png","png/I15.png");
  boyWalk = loadAnimation("png/W1.png","png/W2.png","png/W3.png","png/W4.png","png/W5.png","png/W6.png","png/W7.png","png/W8.png","png/W9.png","png/W10.png","png/W11.png","png/W12.png","png/W13.png","png/W14.png","png/W15.png");
  bgImg = loadImage("snow1.jpg");
  snow2 = loadImage("snow4.webp");
}

function setup() {
  createCanvas(1000, 1000);
  bg = createSprite(500, 500, 100, 100);
  bg.addImage(bgImg);
  bg.scale=2;
  boy = createSprite(620,550,50,50);
  boy.addAnimation("walk",boyWalk);
  boy.scale = 0.2;
  boy.velocityX=3;
  boy.debug=true;
  
  ground= createSprite(950,600,10,10000);
  ground.visible = false;
  ground.collide(boy);
}

function draw() {
  background(255,255,255);  
  snowFall();
  drawSprites();
}
function snowFall(){
  if(frameCount%100===0){
    snow=createSprite(j,0,10,10);
    j=Math.round(random(200,900));
    snow.addImage(snow2);
    snow.scale=0.1;
    snow.velocityY=10;
  }
}