var canvas, backgroundImage,carimge,carimge2,track,ground;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car2,car3,car4,cars;
function preload() {
  backgroundImage = loadImage("Images/1.jpg");
carimge = loadImage("Images/images (1).jpg");
carimge2 = loadImage("Images/images.jpg");
track = loadImage("Images/track.jpg");
ground  = loadImage("Images/ground.png");
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start(); 
 
}


function draw(){
  //background(backgroundImage);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
  drawSprites();
}
