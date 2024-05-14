


let cvs = new Cvs([640,480],1,0);
// let cvs = new Cvs();
let sz = cvs.size()


console.log(25**0.5)


let objCvs;  // for Image File Saving.
function setup() {
  objCvs = createCanvas(...sz);
  background(0)
  blendMode(BLEND);
  stroke(255)
  function unitdraw(aa,dd){

    let bb = []
    let cc = []
    let ff = []

    let ee = cvs.center()

    bb[0] = (dd[0]-aa[0])/3
    bb[1] = (dd[1]-aa[1])/3

    cc[0] = (dd[0]-aa[0])*2/3
    cc[1] = (dd[1]-aa[1])*2/3

    ff[0] = (dd[0]-aa[0])/2
    ff[1] = (dd[1]-aa[1])/2

    let alpha = Math.atan((dd[1]-aa[1])/(dd[0]-aa[0]))*180/Math.PI
    let beta = alpha - 60
    let aaee = ((dd[0]-aa[0])**2+(dd[1]-aa[1])**2)**0.5/3**0.5

    console.log(alpha)

    ee[0] = aa[0]-Math.sin(beta)*aaee
    ee[1] = Math.cos(beta)*aaee + aa[1]

    strokeWeight(11)
    point(...aa)
    point(...bb)
    point(...cc)
    point(...dd)
    point(...ee)
    point(...ff)

    strokeWeight(1)
    line(...aa,...bb)
    line(...bb,...ee)
    line(...ee,...cc)
    line(...cc,...dd)

    noStroke()
    fill(0,255,255)
    text('aa', ...aa);
    text('bb', ...bb);
    text('cc', ...cc);
    text('dd', ...dd);
    text('ee', ...ee);
    text('ff', ...ff);

  }

  unitdraw([0,0],[500,200])

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