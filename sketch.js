var backgroundimg,scene;
var man,manimg;

function preload(){
    backgroundimg = loadImage("image/background img.jpg");
    manimg = loadImage("image/man.png");
}

function setup(){
   createCanvas(displayWidth,displayHeight);
    scene = createSprite(displayWidth/2,displayHeight/2);
    scene.addImage("scene",backgroundimg);
    scene.scale = 4;

    man = createSprite(displayWidth/2,displayHeight/2);
    man.addImage("man",manimg);
    
    
}

function draw(){
   background("blue");

    scene.velocityX=-3;

    if(scene.x < 600 ){
       scene.x = displayWidth/2;
    }

    drawSprites();
}   

