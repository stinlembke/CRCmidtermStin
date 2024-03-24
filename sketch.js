
// const div1 = document.getElementById('div1');
      //mayb dont try to manipulate dom while workin w canvas

let currentTime;

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

  currentTime = millis();

  //transitions over 1000 ms
  // let transitionTime = millis();
  // let transition = map(transitionTime, 0, 5000, 0, 1);

  //for loop for waves
  for(let i=0; i<200; i++){
    push()

    if(millis()<=5000){
      wave.first(i);
    }

    else if(millis()>5000 && millis()<=10000){
      // transitionTime = millis() -5000;\
      wave.second(i, getTransition());
    }

    else if(millis()>10000){
      // transitionTime = millis() -10000;
      wave.third(i, getTransition());
    }

    pop();
  }

}

function getTransition() {
  let progress = millis()-currentTime;
  let transition = map(progress,0,5000,0,1);
  return constrain(transition, 0, 1);
}

class SinWave {
  constructor(){
    // this.transition = map(this.transitionTime, 0, 5000, 0, 1);
  }

  first(i){
    let rotation1 = sin(frameCount+i)*100;
    let size1 = 500-i*3;
    let color1 = color(150, 100, 200);

    stroke(color1);
    rotate(rotation1);
    rect(0, 0, size1, size1, 200-i);
  }

  second(i, transition){

    let rotation2 = lerp(sin(frameCount +i) * 100, sin(frameCount +i/2) * 120, transition );
    let size2 = lerp(500 - i * 3, 500 - i * 5, transition );
    let color2 = lerpColor(color(150, 100, 200), color(100, 200, 250), transition);

    stroke(color2);
    rotate(rotation2);
    rect(0, 0, size2, size2, 200 - i);
  }

  third(i, transition){
    // let transition = this.getTransition();

    let rotation3 = lerp(sin(frameCount +i/2) *120, sin(frameCount+i*3)*75, transition );
    let size3 = lerp(500 - i * 5, 500-i*2, transition );
    let color3 = lerpColor(color(100, 200, 250), color(230, 70, 150), transition );

    stroke(color3);
    rotate(rotation3);
    rect(0, 0, size3, size3, 200 - i);
  }
}