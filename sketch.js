let bg, issimg, iss, spacecraft;
let sp1, sp2, sp3, sp4;
let gameState;
function preload() {
  bg = loadImage("Images/spacebg.jpg");
  issimg = loadImage("Images/iss.png");
  sp1 = loadImage("Images/spacecraft1.png");
  sp2 = loadImage("Images/spacecraft2.png");
  sp3 = loadImage("Images/spacecraft3.png");
  sp4 = loadImage("Images/spacecraft4.png");
}

function setup() {
  createCanvas(800, 400);
  iss = createSprite(400, 200, 50, 50);
  iss.visible = false;

  spacecraft = createSprite(600, 300, 20, 20);
  spacecraft.addImage(sp1);
  spacecraft.scale = 0.1;

  gameState = "undocked";
}

function draw() {
  background(bg);
  textSize(30);
  fill("red");
  image(issimg, 100, -130);

  if (spacecraft.isTouching(iss)) {
    text("Docking Successful", 400, 200);
    gameState = "docked";
  }
  if (gameState === "undocked") {
    if (keyDown("UP_ARROW")) {
      spacecraft.addImage(sp2);
      spacecraft.y = spacecraft.y - 1;
    }
    if (keyDown("RIGHT_ARROW")) {
      spacecraft.addImage(sp3);
      spacecraft.x = spacecraft.x + 1;
    }
    if (keyDown("LEFT_ARROW")) {
      spacecraft.addImage(sp4);
      spacecraft.x = spacecraft.x - 1;
    }
    if (keyDown("DOWN_ARROW")) {
      spacecraft.addImage(sp1);
      spacecraft.y = spacecraft.y + 1;
    }
  }
  drawSprites();
}
