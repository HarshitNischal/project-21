var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
speed=random(55,90)
weight=random(400,1500)
thickness=random(22,83)
bullet=createSprite(50,200,50,20);
bullet.shapeColor="white"
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80)
  bullet.velocityX = speed;

}

function draw() 
{
  background(255,255,255);  
 if(wall.x-bullet.x < (bullet.width+wall.width)/2){

bullet.velocityX=0;
var deformation=0.5 * weight * speed* speed/(thickness*thickness*thickness); 
 if(deformation>10)
 {
    bullet.shapeColor=color(255,0,0);
 }
 
 
 
 if(deformation<10)
 {
    bullet.shapeColor=color(0,255,0);
    
 
 
 
 
  }
 }

 
 
 
 
 
 //mObj.x=mouseX
 //mObj.y=mouseY
 //console.log ((mObj.width+fObj.width)/2);
 //console.log(mObj.x)
 //console.log(mObj.x-fObj.x)
 //console.log(fObj.x-mObj.x)
 //if(isTouching(mObj,fObj))
 
  //{
   // mObj.shapeColor="red";
   // fObj.shapeColor="red";
   //}
   //else
   //{
    //mObj.shapeColor="green";
    //fObj.shapeColor="green";
   //}
 //bounce(Obj1,Obj2);
 
 drawSprites();
}


