const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var box;
var ground;

function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
 console.log(box.type);
 engine = Engine.create();
 world = engine.world;
 var ground_options = {
  isStatic : true
}
 ground = Bodies.rectangle(200,390,200,20,ground_options);
 World.add(world,ground);
 var box_options = {
   restitution : 1.0
 }
 box = Bodies.circle(200,100,20,box_options);
 World.add(world,box);
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(box.position.x,box.position.y,20,20);
  drawSprites();
}