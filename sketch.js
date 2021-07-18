const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 var player = 1
 var gameState = 0 
function preload(){
  crossImg = loadImage("cross.png")
  circleImg = loadImage("circle.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database()

  engine = Engine.create();
  world = engine.world;
  
  
}
function draw() {
  background("cyan");
  Engine.update(engine);

if(gameState === 2){
 
  strokeWeight(25)
  line(windowWidth/3 - 50, 50, windowWidth/3 - 50, 800)
  strokeWeight(25)
  line(windowWidth/2 - 50, 50, windowWidth/2 - 50, 800)
  strokeWeight(25)
  line(windowWidth/5, 250, windowWidth*3/5, 250)
  strokeWeight(25)
  line(windowWidth/5, 600, windowWidth*3/5, 600)

  
 
if(player === 1){
// cross
// top row
   player1()
   player = 2
   
}
else if (player === 2){
player2()
player = 1
}


//circle
//middle




fill("yellow")

textSize(50)
text("Turn  = ", 1500, 435)

textSize(50)
text("Player 1", 1675, 435)
text("Player 2", 1675,500)

  
  

  drawSprites()
}
if (gameState === 0){
  textSize(50)
  fill("Black")
  text("Welcome", windowWidth/2 - 200, 200)
  text("Following page will the tell the intstructions for the game,", 400, 300)
  text( "to move to the next page, press the next button.", 500, 400)

  form = new Form()
  form.display()

}
}
function Cross(a,b){
  cross1 = createSprite(a,b, 100, 100)
  cross1.addImage(crossImg)
  cross1.scale = 0.25
}
function Circle(a,b){
  circle1 = createSprite(a,b, 100, 100)
  circle1.addImage(circleImg)
  circle1.scale = 0.5
}
function player1(){

  fill("yellow")
  textSize(50)
  text("Player 1", 1675, 435)
    if(keyCode === 55 ){
      Cross(450, 120);
     
    }
    else{
      textSize(75)
      fill("black") 
      text("7",450, 120 )
    }
    if(keyCode === 56 ){
      Cross(750, 120);
      
    }
    else{
      textSize(75)
      fill("black") 
      text("8",750, 120 )
    }
    if(keyCode === 57){
      Cross(1050,120)
      
    }
    else{
      textSize(75)
      fill("black") 
      text("9",1050, 120 )
    }





  // middle row 
    if(keyCode === 54 ){
      Cross(1050, 435);
      
    }
    else{
    textSize(75)
    fill("black") 
    text("6",1050, 435 )
    }
    if(keyCode === 52){
      Cross(450,435)
      
    }
    else{
      textSize(75)
      fill("black") 
      text("4",450, 435 )
    }
    if (keyCode === 53){
    Cross(750,435)
    
    
  }
    else{
    textSize(75)
    fill("black") 
    text("5",750, 435 )

  }



  //bottom row
    if(keyCode === 51 ){
      Cross(1050, 745);
      
    }
    else{
      textSize(75)
      fill("black") 
      text("3",1050, 745 )
    }
    if(keyCode === 50 ){
      Cross(750, 745);
      
    }
    else{
      textSize(75)
      fill("black") 
      text("2",750, 745 )
    }
    if(keyCode === 49 ){
      Cross(450, 745);
      
    }
    else{
      textSize(75)
      fill("black") 
      text("1",450, 745 )
  }


  
}
function player2(){

  fill("yellow")
  textSize(50)
  text("Player 2", 1675, 500)
    if(keyCode === 55 ){
      Circle(450, 120);
      
    }
    else{
      textSize(75)
      fill("black") 
      text("7",450, 120 )
    }
    if(keyCode === 56 ){
      Circle(750, 120);
      
    }
    else{
      textSize(75)
      fill("black") 
      text("8",750, 120 )
    }
    if(keyCode === 57){
      Circle(1050,120)
      
    }
    else{
      textSize(75)
      fill("black") 
      text("9",1050, 120 )
    }





  // middle row 
    if(keyCode === 54 ){
      Circle(1050, 435);
      
    }
    else{
    textSize(75)
    fill("black") 
    text("6",1050, 435 )
    }
    if(keyCode === 52){
      Circle(450,435)
      
    }
    else{
      textSize(75)
      fill("black") 
      text("4",450, 435 )
    }
    if (keyCode === 53){
    Circle(750,435)
    
    
  }
    else{
    textSize(75)
    fill("black") 
    text("5",750, 435 )

  }



  //bottom row
    if(keyCode === 51 ){
      Circle(1050, 745);
      
    }
    else{
      textSize(75)
      fill("black") 
      text("3",1050, 745 )
    }
    if(keyCode === 50 ){
     Circle(750, 745);
      
    }
    else{
      textSize(75)
      fill("black") 
      text("2",750, 745 )
    }
    if(keyCode === 49 ){
      Cross(450, 745);
      
    }
    else{
      textSize(75)
      fill("black") 
      text("1",450, 745 )
  }


  
}