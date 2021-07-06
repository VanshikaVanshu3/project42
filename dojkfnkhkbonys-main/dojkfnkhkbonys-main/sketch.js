var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(900, 500);
  spacecraft=createSprite(285,300);
  spacecraft.addImage(scimg);
  spacecraft.scale=0.2;
  iss=createSprite(330,130);
  iss.addImage(issimg);
  iss.scale=0.3;

  
  
  
  
  
}
function draw() {
  background(bg);
  
  spacecraft.addImage(scimg);
   
  if(!hasDocked){
    spacecraft.x+=random (-1,1);
    if(keyDown("LEFT_ARROW")){
      spacecraft.x-=2;
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.x+=2;
    }
    if(keyDown("UP_ARROW")){
      spacecraft.y-=2;
    }
  }
  
  
  
  
  
  
  

  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}
