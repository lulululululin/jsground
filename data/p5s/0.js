

let objCvs;  // for Image File Saving.

let cvs = new Cvs([640,480],1,0);

// sz: size
let sz = cvs.size()
// NaN set

function setup() {
  
  objCvs = createCanvas(...sz);
  blendMode(BLEND);

}

function draw() {
  
}


function keyPressed(){
  if (key==" "){
    clear();
  }
  if (key=="c"){
    noLoop();
  }
  if (key=="v"){
    // redraw();
    loop();
  }
  if (key=="x"){
  }
  if (key=="s"){
    saveCanvas(objCvs, 'nameit_', 'jpg');
  }
}

let mdv = []; // Mouse Dragged Value

function mousePressed(){
}

function mouseReleased(){
}

function mouseDragged(){
  if (mouseButton === LEFT) {
  }
  else if (mouseButton === CENTER) {
  }
  else if (mouseButton === RIGHT) {
  }
}