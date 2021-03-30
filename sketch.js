const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var string1, string2, string3, string4, string5;

function setup(){
    canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    };
    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);

    pendulum1 = new Pendulum(100,350);
    pendulum2 = new Pendulum(161,350);
    pendulum3 = new Pendulum(222,350);
    pendulum4 = new Pendulum(283,350);
    pendulum5 = new Pendulum(344,350);

    string1 = new Sling(pendulum1.body,{x:100,y:70});
    string2 = new Sling(pendulum2.body,{x:160,y:70});
    string3 = new Sling(pendulum3.body,{x:222,y:70});
    string4 = new Sling(pendulum4.body,{x:283,y:70});
    string5 = new Sling(pendulum5.body,{x:344,y:70});
}
function draw(){
    background(0);
    Engine.update(engine);

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

    string1.display();
    string2.display();
    string3.display();
    string4.display();
    string5.display();

}
function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}