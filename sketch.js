var balloon, background;
function preload() {
  backgroundImg = loadImage("cityImage.png")
  balloonImage = loadAnimation("hotairballoon1.png", "hotairballoon2.png", "hotairballoon3.png");
}

function setup(){
   database = firebase.database();
   console.log(database);
    createCanvas(windowWidth,windowHeight);

balloon = createSprite (100,400, 100, 100)
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 1;


}

function draw(){

    background(backgroundImg);
  
        if(keyDown(LEFT_ARROW)){
            balloon.x = balloon.x - 10;
        }
        else if(keyDown(RIGHT_ARROW)){
            balloon.x = balloon.x + 10;
        }
        else if(keyDown(UP_ARROW)){
            balloon.y = balloon.y - 10;
        }
        else if(keyDown(DOWN_ARROW)){
             balloon.y = balloon.y + 10;
        }
        drawSprites();
    }

    


