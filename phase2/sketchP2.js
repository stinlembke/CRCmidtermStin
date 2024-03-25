

function setup() {
    createCanvas(windowWidth, windowHeight);

    rose1 = new Rose();
    rose2 = new Rose();
}

function draw() {
    background(200);
    translate(width / 2, height / 2); 

    for(let angle=0; angle<=TWO_PI*5; angle+= 0.1){
        
        let timing = millis()/10;
        let speed = map(mouseX+timing, width, 0, 0.1, 10);
        let radius = angle * speed;
        let x= radius * cos(angle);
        let y= radius * sin(angle);

        rose1.display(x,y);
        rose2.display(x+50, y-50);

        if(timing>=500){
            timing=0;
        }
    }
}

class Rose{
    constructor(){
    }

    display(x,y){
        fill(200,100,100);
        ellipse(x,y,20,20);
    }
}

// function spiralMaze() {
//         x

//     // stroke(200,100,100);
//     // strokeWeight(5);
//     // beginShape();
//     // for (let i=0;i<=200;i++){
//     //     let x = i * cos
//     // }
    
// }


