const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const constraint=Matter.Constraint
var engine,world
var droplets
var walking
var lightning1
function preload(){

}

function setup(){
    createCanvas(1200,800)
    engine=Engine.create()
    world=engine.world
    droplets=new droplet(300,100,30)
     walking=new walker(100,1100,20,20)
     lightning1= new lightning(100,100)
   Engine.run(engine)
}

function draw(){
    background(0)
    droplets.display()
    walking.display()
    lightning1.display()
    
}   

