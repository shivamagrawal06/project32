const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundimage;
var response,j,daytime,hour;
var ampm;



function preload() {
    // create getBackgroundImg( ) here
    gettime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundimage ){
        background(backgroundimage);
        }

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour < 12 && hour > 0){
        ampm = " AM ";
    }
    else {
        ampm = " PM ";
    };

    textSize(35);
    if(hour>12){
 hour=hour-12;
    }
    text("TIME : " + hour + ampm,50,50);
}

async function gettime(){
    response = await fetch("https://worldclockapi.com/api/json/est/now");
    j = await response.json();
    daytime = j.currentDateTime;
    console.log(daytime);
    hour =  daytime.slice(11,13);
    console.log(hour);
   if(hour <= 8 && hour >= 6){
       var bg = "sunrise1.png";
   }
   else if(hour <= 10 && hour >= 8){
       var bg = "sunrise2.png";
   }
   else if(hour <= 12 && hour >= 10){
       var bg = "sunrise4.png";
   }
   else if(hour <= 14 && hour >= 12){
       var bg = "sunrise5.png";
   }
   else if(hour <= 15 && hour >= 14){
       var bg = "sunset7.png";
   }
   else if(hour <= 17 && hour >= 15){
       var bg = "sunset10.png";
   }
   else if(hour <= 20 && hour >= 17){
       var bg = "sunset11.png";
   }
   else {
       var bg = "sunset12.png";
   }
   backgroundimage = loadImage(bg);
    console.log(hour);

}
