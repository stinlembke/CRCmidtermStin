
// const div1 = document.getElementById('div1');
      //mayb dont try to manipulate dom while workin w canvas

let startTime;
let count=1;
let wave;

const waveCount = 200;

function setup() {
 createCanvas(windowWidth, windowHeight);

 angleMode(DEGREES); 
 rectMode(CENTER);

 wave = new SinWave();
}

function draw() {
  background(15,50,80);
  noFill();
  translate(width/2, height/2);

  //transitions over 1000 ms
  // let transitionTime = millis();
  // let transition = map(transitionTime, 0, 5000, 0, 1);

  //for loop for waves
  for(let i=0; i<waveCount; i++) {
    push();
    
    wave.first(i, getTransition());
    // wave.second(i, getTransition());

    // if(millis()>=10000){
    //   count=2;
    // }

    // if(millis()<=20000){
    //   if(millis()<=10000){
    //   wave.first(i, getTransition());
    // }

    // if(millis()<=15000){
    //   wave.second(i, getTransition());
    // }

      // if(millis()>=10000){
      //   // transitionTime = millis() -5000;
      //   wave.third(i, getTransition());
      // }
    // }

    // if(millis()>10000){
    //   // transitionTime = millis() -10000;
    //   wave.third(i, getTransition());
    // }

    pop();
  }

}

// This returns a 0-1 value that represents the fractions of a second
function getTransition() {
  return (millis() / 10_000) % 1;
}


class SinWave {
  constructor(){
    // this.transition = map(this.transitionTime, 0, 5000, 0, 1);
  }

  first(i, transition){
    let rotation1 = lerp(sin(frameCount+i) * 100, sin(frameCount+i*3) * 75, transition);
    let size1 = lerp(500-i*3, 500-i*2, transition);
    let color1 = lerpColor(color(150, 100, 200), color(230, 70, 150), transition);

    rotate(rotation1);
    stroke(color1);
    rect(0, 0, size1, size1, 200-i);
  }

  // second(i, transition, count = 0){

  //   let rotation2 = lerp(sin(frameCount +i) * 100, sin(frameCount +i/2) * 120, transition);
  //   let size2 = lerp(500 - i * 3, 500 - i * 5, transition);
  //   let color2 = lerpColor(color(150, 100, 200), color(100, 200, 250), transition);

  //   // if(count==1){ //setting progression for animation
  //     stroke(color2);
  //     rotate(rotation2);
  //     rect(0, 0, size2, size2, 200 - i);

  //   // } else if (count==2){ //making this one into a rose too
  //     let rotationRose = lerp(rotation2, sin(frameCount+i*3)*75, transition);
  //     let sizeRose = lerp(size2, 500-i*2, transition);
  //     let colorRose = lerpColor(color2, color(230, 70, 150), transition );
  //     stroke(colorRose);
  //     rotate(rotationRose);
  //     rect(0, 0, sizeRose, sizeRose, 200 - i);
  
  // }

  // third(i, transition){
  //   // let transition = this.getTransition();

  //   let rotation3 = lerp(sin(frameCount +i/2) *120, sin(frameCount+i*3)*75, transition );
  //   let size3 = lerp(500 - i * 5, 500-i*2, transition );
  //   let color3 = lerpColor(color(100, 200, 250), color(230, 70, 150), transition );

  //   stroke(color3);
  //   rotate(rotation3);
  //   rect(0, 0, size3, size3, 200 - i);
  // }
}