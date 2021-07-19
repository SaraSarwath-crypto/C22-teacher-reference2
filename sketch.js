const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   

    object = Bodies.rectangle(200,100,20, 20);
    World.add(world,object);

    console.log(object);
}

function draw(){
    background("red");
    Engine.update(engine);
    rectMode(CENTER);
   rect(object.position.x,object.position.y,40,40);

 
}