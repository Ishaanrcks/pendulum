const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
var engine, world;
var box1;
const Constraint= Matter.Constraint;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    sphere = new pendulum();
    world.gravity.x=0;
        consb=new constraints(sphere.body,{x:200,y:10});
    
}
function draw(){
    background(255);
    Engine.update(engine);
    sphere.display();
    consb.display();
}
