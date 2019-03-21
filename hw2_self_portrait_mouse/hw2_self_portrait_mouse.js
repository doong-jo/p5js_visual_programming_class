const WIDTH = 600;
const HEIGHT = 600;

const COLOR_SPACE = '#0C0C04';
const COLOR_MOON = '#BAB9B9';
const COLOR_STAR = '#FAFAFA';
const COLOR_HOUSE = '#A6BFC8';

const COLOR_BLACKHOLE = '#181B35';
const COLOR_MOUTH = '#C82F43';

const NUM_STARS = 20;
const NUM_ROOF = 20;

const SIZE_STAR = 4;
const SIZE_MOON = 50;
const SIZE_MOUTH_OPEN = 350;

const MOUTH_CENTER_X = WIDTH / 2;
const MOUTH_CENTER_Y = HEIGHT / 2;

let add_color = COLOR_MOON;
let add_size = 0;

let mouthY = SIZE_MOUTH_OPEN;
let mouthState = false;

//let starRandX = [];
//let starRandY = [];


function setup() {
  createCanvas(WIDTH,HEIGHT);
  background(0);
  frameRate(10);
  //for(var i=0; i<NUM_STARS; i++) {
  // starRandX[i] = random(WIDTH);
  // starRandY[i] = random(HEIGHT);
  // console.log(starRandX[i], starRandY[i]);
  //}
}

function draw() {

  //for(var i=0; i<NUM_STARS; i++) drawStar(starRandX[i], starRandY[i]);
  drawFlower(509, 54);
  drawFlower(259, 503);
  drawFlower(314, 221);
  drawFlower(29, 88);
  drawFlower(349, 297);
  drawFlower(372, 391);
  drawFlower(394, 509);
  drawFlower(188, 444);
  drawFlower(388, 78);
  drawFlower(26, 345);
  drawFlower(475, 338);
  drawFlower(583, 180);
  drawFlower(51, 596);
  drawFlower(348, 500);
  
  drawMouth();
  drawTooth();
  
  drawPlanet(WIDTH / 4, HEIGHT / 4, 252, 228, 4);
  drawPlanet(300, 400, 63, 173, 199);
  drawPlanet(100, 30, 241, 175, 59);
  drawPlanet(20, 300, 239, 4, 95);
  drawPlanet(400, 200, 13, 245, 13);
  drawPlanet(550, 250, 190, 182, 66);
  drawPlanet(530, 530, 34, 4, 151);
  drawPlanet(50, 480, 6, 144, 192);
  drawPlanet(200, 230, 246, 7, 7);
  drawPlanet(550, 20, 231, 127, 230);
  drawPlanet(320, 540, 188, 218, 154);
  
  drawEye();
  
  drawMouseReaction();
  drawButton();
  // drawShip(mouseX, mouseY);
  
}

function drawMouseReaction() {
  if( mouseIsPressed ) { 
    if( isClickedCircle(mouseX, mouseY, 50, 550, 60) ) {
      console.log('clicked');
      background(0);
    }
    stroke(color(COLOR_STAR));
    line(mouseX - SIZE_STAR, mouseY, mouseX + SIZE_STAR, mouseY);
    line(mouseX, mouseY - SIZE_STAR, mouseX, mouseY + SIZE_STAR);
  } else {
    
  }
  add_color = map(HEIGHT - mouseY, 0, HEIGHT, 0, 100);
  add_size = map(mouseX, 0, WIDTH, 0, 50);
}

function drawPlanet(x, y, r, g, b) {
  fill(color(r + add_color, 
             g + add_color, 
             b + add_color));
  stroke(0);
  ellipse(x - 40, y, SIZE_MOON + add_size, SIZE_MOON + add_size); 
}

function drawEye() {
  fill(255);
  ellipse(WIDTH / 2 - 70, 60, 100, 50);
  ellipse(WIDTH / 2 + 70, 60, 100, 50);
  
  fill(0);
  ellipse(WIDTH / 2 - 70, 60, 50, 50);
  ellipse(WIDTH / 2 + 70, 60, 50, 50);
}

function drawTooth() {
  stroke(0);
  fill(255);
  rect(WIDTH / 2 - 50, 130, 50, 50);
  rect(WIDTH / 2, 130, 50, 50);
  
  rect(WIDTH / 2 - 50, 420, 50, 50);
  rect(WIDTH / 2, 420, 50, 50);
}

function drawMouth() {
  stroke(0);
  fill(color(COLOR_MOUTH));
  ellipse(WIDTH / 2, HEIGHT / 2, 370, mouthY + 20);
  
  fill(color(COLOR_BLACKHOLE));
  ellipse(WIDTH / 2, HEIGHT / 2, 350, mouthY);
}

function drawStarPattern(x, y) {
  stroke(color(COLOR_STAR));
  line(x - SIZE_STAR, y, x + SIZE_STAR, y);
  line(x, y - SIZE_STAR, x, y + SIZE_STAR);
}


function drawFlower(x, y) {
  stroke(color(COLOR_STAR));
  line(x - SIZE_STAR, y, x + SIZE_STAR, y);
  line(x, y - SIZE_STAR, x, y + SIZE_STAR);
}

function drawButton() {
  stroke(0);
  
  fill(color('#CCD4D4'));
  ellipse(50, 550, 60, 60);
}

function isClickedCircle(mX, mY, cX, cY, R) {
  const x = abs(mX - cX);
  const y = abs(mY - cY);
  const d = sqrt(x * x + y * y);
  
  return d <= R / 2 ? true : false;
}
/*최근 과식을 자주 하는 저의 모습을 표현하였습니다.
1. 마우스가 왼쪽으로 갔을 때 음식들이 작게 오른쪽으로 갔을 때 크게
2. 마우스가 위로 갔을 때 음식들의 색상이 밝게 아래로 갔을 때 어둡게
3. 마우스를 클릭했을 때 별이 겹치게 만들어짐
4. 왼쪽 아래 버튼 (회색 원)을 클릭하면 마우스로 그린 별들을 지웁니다.*/

const WIDTH = 600;
const HEIGHT = 600;

const COLOR_SPACE = '#0C0C04';
const COLOR_MOON = '#BAB9B9';
const COLOR_STAR = '#FAFAFA';
const COLOR_HOUSE = '#A6BFC8';

const COLOR_BLACKHOLE = '#181B35';
const COLOR_MOUTH = '#C82F43';

const NUM_STARS = 20;
const NUM_ROOF = 20;

const SIZE_STAR = 4;
const SIZE_MOON = 50;
const SIZE_MOUTH_OPEN = 350;

const MOUTH_CENTER_X = WIDTH / 2;
const MOUTH_CENTER_Y = HEIGHT / 2;

let add_color = COLOR_MOON;
let add_size = 0;

let mouthY = SIZE_MOUTH_OPEN;
let mouthState = false;

//let starRandX = [];
//let starRandY = [];


function setup() {
  createCanvas(WIDTH,HEIGHT);
  background(0);
  frameRate(10);
  //for(var i=0; i<NUM_STARS; i++) {
  // starRandX[i] = random(WIDTH);
  // starRandY[i] = random(HEIGHT);
  // console.log(starRandX[i], starRandY[i]);
  //}
}

function draw() {

  //for(var i=0; i<NUM_STARS; i++) drawStar(starRandX[i], starRandY[i]);
  drawFlower(509, 54);
  drawFlower(259, 503);
  drawFlower(314, 221);
  drawFlower(29, 88);
  drawFlower(349, 297);
  drawFlower(372, 391);
  drawFlower(394, 509);
  drawFlower(188, 444);
  drawFlower(388, 78);
  drawFlower(26, 345);
  drawFlower(475, 338);
  drawFlower(583, 180);
  drawFlower(51, 596);
  drawFlower(348, 500);
  
  drawMouth();
  drawTooth();
  
  drawPlanet(WIDTH / 4, HEIGHT / 4, 252, 228, 4);
  drawPlanet(300, 400, 63, 173, 199);
  drawPlanet(100, 30, 241, 175, 59);
  drawPlanet(20, 300, 239, 4, 95);
  drawPlanet(400, 200, 13, 245, 13);
  drawPlanet(550, 250, 190, 182, 66);
  drawPlanet(530, 530, 34, 4, 151);
  drawPlanet(50, 480, 6, 144, 192);
  drawPlanet(200, 230, 246, 7, 7);
  drawPlanet(550, 20, 231, 127, 230);
  drawPlanet(320, 540, 188, 218, 154);
  
  drawEye();
  
  drawMouseReaction();
  drawButton();
  // drawShip(mouseX, mouseY);
  
}

function drawMouseReaction() {
  if( mouseIsPressed ) { 
    if( isClickedCircle(mouseX, mouseY, 50, 550, 60) ) {
      console.log('clicked');
      background(0);
    }
    stroke(color(COLOR_STAR));
    line(mouseX - SIZE_STAR, mouseY, mouseX + SIZE_STAR, mouseY);
    line(mouseX, mouseY - SIZE_STAR, mouseX, mouseY + SIZE_STAR);
  } else {
    
  }
  add_color = map(HEIGHT - mouseY, 0, HEIGHT, 0, 100);
  add_size = map(mouseX, 0, WIDTH, 0, 50);
}

function drawPlanet(x, y, r, g, b) {
  fill(color(r + add_color, 
             g + add_color, 
             b + add_color));
  stroke(0);
  ellipse(x - 40, y, SIZE_MOON + add_size, SIZE_MOON + add_size); 
}

function drawEye() {
  fill(255);
  ellipse(WIDTH / 2 - 70, 60, 100, 50);
  ellipse(WIDTH / 2 + 70, 60, 100, 50);
  
  fill(0);
  ellipse(WIDTH / 2 - 70, 60, 50, 50);
  ellipse(WIDTH / 2 + 70, 60, 50, 50);
}

function drawTooth() {
  stroke(0);
  fill(255);
  rect(WIDTH / 2 - 50, 130, 50, 50);
  rect(WIDTH / 2, 130, 50, 50);
  
  rect(WIDTH / 2 - 50, 420, 50, 50);
  rect(WIDTH / 2, 420, 50, 50);
}

function drawMouth() {
  stroke(0);
  fill(color(COLOR_MOUTH));
  ellipse(WIDTH / 2, HEIGHT / 2, 370, mouthY + 20);
  
  fill(color(COLOR_BLACKHOLE));
  ellipse(WIDTH / 2, HEIGHT / 2, 350, mouthY);
}

function drawStarPattern(x, y) {
  stroke(color(COLOR_STAR));
  line(x - SIZE_STAR, y, x + SIZE_STAR, y);
  line(x, y - SIZE_STAR, x, y + SIZE_STAR);
}


function drawFlower(x, y) {
  stroke(color(COLOR_STAR));
  line(x - SIZE_STAR, y, x + SIZE_STAR, y);
  line(x, y - SIZE_STAR, x, y + SIZE_STAR);
}

function drawButton() {
  stroke(0);
  
  fill(color('#CCD4D4'));
  ellipse(50, 550, 60, 60);
}

function isClickedCircle(mX, mY, cX, cY, R) {
  const x = abs(mX - cX);
  const y = abs(mY - cY);
  const d = sqrt(x * x + y * y);
  
  return d <= R / 2 ? true : false;
}
