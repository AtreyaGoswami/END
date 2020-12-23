var  background,backgroundImg,canvas,Man,ManImg;

function preload(){
 backgroundImg.loadImage(GIF/Wubj.gif);

 ManImg.loadImage(GIF/manrun.gif);

 obstaclesImg.loadImage(GIF/Stone.png)
}

function setup(){
 createCanvas(400,400);
 background.AddImage(backgroundImg);
 
  Man = createSprite(20,385);
  Man.AddImage(ManImg)
}


function draw(){

  if(keyDown("space")){
    Man.velocityY = -10 ;
  }
  
  Man.velocityY = Man.velocityY + 0.8;
  
  drawSprite();
}
function obstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle1 = createSprite(400,365,10,40);
    obstacle1.velocityX = -6;
    

  }
}

