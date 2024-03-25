
const waveCount = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  rectMode(CENTER);

}

let amGoingUp = true;

let amFlipping = false;

function drawWave(i, transition) {
  const rotation = lerp(
    sin(frameCount + i) * 100,
    sin(frameCount + i * 3) * 75,
    transition
  );
  const myColor = lerpColor(
    color(150, 100, 200),
    color(230, 70, 150),
    transition
    );
    
  const size = lerp(500 - i * 3, 500 - i * 2, transition);

  rotate(rotation);
  stroke(myColor);
  rect(0, 0, size, size, 200 - i);
}

function draw() {
  background(45, 20, 60);
  noFill();
  translate(width / 2, height / 2);

  const transition = getTransition();
  if (amFlipping === false && transition === 1) {
    console.log(`Flipping amGoingUp to ${!amGoingUp}`);
    amGoingUp = !amGoingUp;
    amFlipping = true;
  } else if (transition === 0) {
    amFlipping = false
  }

  let animationPercentage = transition;
  // This fixes it for goin up, but not for going down
  if (!amGoingUp) {
    animationPercentage = 1 - transition;
  } 

  // Stop it from flickering in the moment of transition
  if (animationPercentage === 0 && !amGoingUp) {
    animationPercentage = 0.99;
  } else if (animationPercentage === 1 && amGoingUp) {
    animationPercentage = 0.01;
  }

  console.log({transition, animationPercentage, amFlipping, amGoingUp})

  for (let i = 0; i < waveCount; i++) {
    push();
    scale(1.2);
    drawWave(i, animationPercentage);
    pop();
  }
}

// This returns a 0-1 value that represents the fractions of a second
function getTransition() {
  // I need to round 0.9974534543 not just to 1, but to 0.99
  return (Math.round(((millis() / 10000) % 1) * 100) / 100);
}
