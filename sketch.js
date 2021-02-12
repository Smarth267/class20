var R1;
var R2;

function setup() {
  createCanvas(800,400);
 R1= createSprite(400, 200, 50, 50);
 R1.shapeColor="green"
 R2 = createSprite(400,200,20,50);
 R2.shapeColor="green"
}

function draw() {
  background(0);  
  drawSprites();
  R2.x=mouseX;
  R2.y=mouseY;
  if(R2.x-R1.x<R1.width/2+R2.width/2 &&
    R1.x-R2.x<R1.width/2+R2.width/2 &&
    R2.y-R1.y<R1.height/2+R2.height/2&&
    R1.y-R2.y<R1.height/2+R2.height/2){
  R1.shapeColor="red";
  R2.shapeColor="red";
  }
 else{
   R1.shapeColor="green";
   R2.shapeColor="green";
 }
}