// var top= createSprite(200, 0,400,2);
// var bottom= createSprite(200, 400,400,2);
// var left = createSprite(0, 200,2,400);
// var right = createSprite(400, 200,2,400);
var letterN;letterS;
var inky,pinky,blinky,cylde,pacman;


function preload(){
letterN = loadImage("Images/n_11.png");
letterS = loadImage("Images/s_1.png")
inky = loadImage("Images/inky.jpg")
pinky = loadImage("Images/pinky.png")
blinky = loadImage("Images/blinky.jpg")
cylde = loadImage("Images/cyclde.png")
pacman= loadImage("Images/pacman.jpg")

}

function setup(){
createCanvas (displayWidth,displayHeight);

var letterN_1 = createSprite(600,400,100,200);
letterN_1.addImage(letterN);

var letterS_1 = createSprite(1100,400,100,200);
letterS_1.addImage(letterS)
letterS_1.scale = 1;

// var inky_1 = createSprite()


}


function draw() {
background("black");
  fill("orange");
  rect(100,300,50,200);

  
  
  
  
  
  createEdgeSprites();
  drawSprites();
  
}
