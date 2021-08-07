const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;

var arrow;
var playerarrow
var playerarcher, comparcher

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
  playerarcher = new PlayerArcher(200,player.body.position.y-180,120,120)
  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  comparcher = new ComputerArcher(
    200,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  //Create an arrow Object
  playerarrow = new PlayerArrow(playerarcher.body.x,playerarcher.body.y,50,50)
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerarcher.display();
  comparcher.display()


  //Display arrow();
  playerarrow.display()
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    playerarrow.shoot(playerarcher.body.angle)
    //Call shoot() function and pass angle of playerArcher


  }
}



