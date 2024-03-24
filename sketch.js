
const div1 = document.getElementById('div1');

function setup() {
 // put setup code here
 createCanvas(windowWidth, windowHeight);

 angleMode(DEGREES);
 rectMode(CENTER);
}

function draw() {
  // put drawing code here
  background(10,20,30);

  // div1.mouseOver(sinWave);
  noFill();
  stroke(255);
  translate(width/2, height/2);

  if(millis()>=5000){
    strokeOpacity=map(millis(), 5000, 7000, 0, 100);
  } else {
    strokeOpacity = 100;
  }

  for(var i=0; i<175; i++){
    push()
    rotate(sin(frameCount+i/2)*100);
    stroke(150,100,200);
    rect(0, 0, 500 - i * 3, 500 - 1 * 3, 100 - 1);

    if(millis()>=5000){ //2nd one appears, transitionally
      // for(strokeOpacity=0;strokeOpacity<=100;strokeOpacity+=10){
        stroke(80,200,170,strokeOpacity);
        sin(frameCount + i / 5) * 100;
        rect(0, 0, 400 - i * 2, 400 - 1 * 2, 80 - 1);
    }
    pop()
  }
}

// function sinWave(){
//   noFill();
//   stroke(255);
//   translate(width/2, height/2);

//   for(var i=0; i<200; i++){
//     push()
//     rotate(sin(frameCount+i/2)*100)
//     rect(0,0,600-i*3,600-1*3,200-1);
//     pop()
//   }
// }
