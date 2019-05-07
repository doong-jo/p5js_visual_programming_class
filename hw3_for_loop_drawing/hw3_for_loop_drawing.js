const WIDTH = 600;
const HEIGHT = 600;

const COLOR_SPACE = '#0C0C04';
const COLOR_STAR = '#FAFAFA';
const COLOR_COMET = '#ACF3F8';
const COLOR_EARTH = '#1C54C2';

const NUM_STARS = 20;

const SIZE_STAR = 4;

let starRandX = [];
let starRandY = [];

const COMET_SPEED = 20;
const COMET_TAIL_RADIUS = 20;
const COMET_TAIL_NUM = 100;
const COMET_TAIL_SIZE = 100;

const EARTH_SIZE = 20;

let cometPos = {
  x: 0,
  y: 0
};


function setup() {
  createCanvas(WIDTH,HEIGHT);
  background(color(COLOR_SPACE));
  frameRate(10);
  
  for(var i=0; i<NUM_STARS; i++) {
    starRandX[i] = random(WIDTH);
    starRandY[i] = random(HEIGHT);
  }
}

function draw() {
  background(color(COLOR_SPACE));
  
  for(var i=0; i<NUM_STARS; i++) draw_star(starRandX[i], starRandY[i]);
  draw_comet();
  
  
  draw_planet(WIDTH / 2, HEIGHT / 2, 40, 200, 30);
  draw_planet(WIDTH / 2, HEIGHT / 2, 200, 40, 200);
  draw_planet(WIDTH / 2, HEIGHT / 2, 30, 40, 200);
}

function draw_comet() {  
  for(var i=0; i<COMET_TAIL_NUM; i++) {
    let sizePlus = 1;
    if( i % 3 == 0 ) { sizePlus = 2; }
    strokeWeight(random(5));
    stroke(color(100 + random(155), 100 + random(155), 100 + random(155)));
    
    const tailSx = (cometPos.x + COMET_TAIL_RADIUS) - (random(COMET_TAIL_SIZE) + 20) * sizePlus;
    const tailSy = (cometPos.y + COMET_TAIL_RADIUS) - (random(COMET_TAIL_SIZE) + 20) * sizePlus;
    
    line(
      tailSx, 
      tailSy, 
      cometPos.x, cometPos.y
    );
  }
  
  fill(color(COLOR_COMET));
  
  circle(cometPos.x, cometPos.y, COMET_TAIL_RADIUS);
  cometPos.x += COMET_SPEED;
  cometPos.y += COMET_SPEED;
  
  if( cometPos.x > WIDTH * 1.5 && cometPos.y > HEIGHT * 1.5 ) {
    cometPos.x = -random(100);
    cometPos.y = -random(100);
  }
}

function draw_star(x, y) {
  strokeWeight(random(2));
  stroke(color(COLOR_STAR));
  line(x - SIZE_STAR, y, x + SIZE_STAR, y);
  line(x, y - SIZE_STAR, x, y + SIZE_STAR);
}

let planetAngle = 0.0;
function draw_planet(x, y, r, g, b) {
  strokeWeight(0);
  fill(color(r, g, b, 200 + cos(planetAngle) * 100));
  
  let inc = PI / 50.0;
  circle(x + sin(planetAngle) * WIDTH / 2, y, EARTH_SIZE * cos(planetAngle)  + EARTH_SIZE * 2);
  planetAngle = planetAngle + inc;
}
