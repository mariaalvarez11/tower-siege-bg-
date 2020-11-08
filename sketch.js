const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var box1,box2,box3,box4;
var box5,box6,box7,box8;
var box9,box10,box11,box12;
var box13,box14,box15,box16;
var chains;

var gamestate = "play"
var score = "0"

var bgImage

function preload(){
  getBackgroundImage();
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  
  box1 = new Box(290,270,30,40);
  box2 = new Box(320,270,30,40);
  box3 = new Box(350,270,30,40);
  box4 = new Box(380,270,30,40);
  box5 = new Box(410,70,30,40);
  box6 = new Box(440,270,30,40);
  box7 = new Box(470,2270,30,40);

  box8 = new Box(320,230,30,40);
  box9 = new Box(350,230,30,40);
  box10 = new Box(380,230,30,40);
  box11 = new Box(410,230,30,40);
  box12 = new Box(440,230,30,40);

  box13 = new Box(350,190,30,40);
  box14 = new Box(380,190,30,40);
  box15 = new Box(410,190,30,40);

  box16 = new Box(380,150,30,40);

  stand = new Stand(400,300,600,15)

  chains = new Chain(ball,{x:100,y:200});

  Engine.run(engine);
}

function draw() {
  if(bgImage){
    background(bgImage);
  }

  textSize(36)
  text("Score:" + score,100,50);
  
  fill("pink");

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("purple");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("teal");
  box13.display();
  box14.display();
  box15.display();
 
  fill("blue")
  box16.display();

  stand.display();
  
  ground.display();

  
  chains.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,10);
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
  chains.fly();   
  gamestate = "throw"
}

function keyPressed(){
  if(keyCode === 32){
   chains.attach(this.ball)
  }
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);

  if (hour > 06 && hour < 18) {
    bg = "light.jpg";
  }
  else {
    bg = "dark.jpg";
  }

  bgImage = loadImage(bg);
  
}