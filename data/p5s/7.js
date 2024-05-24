


let cvs = new Cvs([640,480],1,0);
// let cvs = new Cvs();
let sz = cvs.size()


let objCvs;  // for Image File Saving.

let aa = [200,200]
let bb = [440,200]
let level = 3

let fct1 = 0.5
let fct2 = 0.5

function unitdraw(aa,dd,nn){

  let bb = []
  let cc = []
  let ff = []

  let ee = cvs.center()

  bb[0] = aa[0]+(dd[0]-aa[0])/3
  bb[1] = aa[1]+(dd[1]-aa[1])/3

  cc[0] = aa[0]+(dd[0]-aa[0])*2/3 
  cc[1] = aa[1]+(dd[1]-aa[1])*2/3

  ff[0] = aa[0]+(dd[0]-aa[0])/2
  ff[1] = aa[1]+(dd[1]-aa[1])/2

  //     theta = degrees(Math.atan((dd[1]-aa[1])/(dd[0]-aa[0])))


  function getee(){

    function geteeffgg(){
      let eeffgg = degrees(Math.atan((dd[1]-aa[1])/(dd[0]-aa[0])))
      console.log(eeffgg)
      return eeffgg
    }
    
    function geteeff(){
      let eeff = (((dd[0]-aa[0])**2+(dd[1]-aa[1])**2)**fct2)/2*(3**fct1)
      return eeff
    }

    let eeff = geteeff()
    let eeffgg = geteeffgg()

    ee[0] = (ff[0] + Math.sin(eeffgg)*eeff)
    ee[1] = (ff[1] + Math.cos(eeffgg)*eeff)
  }

  function drawit(){
    // strokeWeight(nn*2)
    // point(...aa)
    // point(...bb)
    // point(...cc)
    // point(...dd)
    // point(...ee)
    // point(...ff)

    if (nn>0){
      unitdraw(aa,bb,nn-1)
      unitdraw(bb,ee,nn-1)
      unitdraw(ee,cc,nn-1)
      unitdraw(cc,dd,nn-1)
    }
    else {
      strokeWeight(10)
      stroke(255,7)
      line(...aa,...bb)
      line(...bb,...ee)
      line(...ee,...cc)
      line(...cc,...dd)
    }

    // noStroke()
    // fill(0,255,255)
    // text('aa'+nn, ...aa);
    // text('bb'+nn, ...bb);
    // text('cc'+nn, ...cc);
    // text('dd'+nn, ...dd);
    // text('ee'+nn, ...ee);
    // text('ff'+nn, ...ff);
  }

  getee()

  drawit()
}
function setup() {
  objCvs = createCanvas(...sz);
  frameRate(10);
  background(0)
  blendMode(BLEND);
  stroke(255)


}

function draw() {
  background(0,50)
  unitdraw(aa,bb,level)
}


function keyPressed(){
  if (key==" "){
    clear();
    background(0)
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
    background(0,25)
    fct1 = (1 + mouseY*99/sz[1])*0.01
    fct2 = (1 + mouseX*99/sz[0])*0.01
  }
  else if (mouseButton === CENTER) {
    background(0,25)
    // bb = [mouseX,sz[1]*0.35]
    // aa = [sz[0]-mouseX,sz[1]*0.35]

    level = 0 + mouseY*5/sz[1]
  }
  else if (mouseButton === RIGHT) {
  }
}


