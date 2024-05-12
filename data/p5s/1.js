

let objCvs;  // for Image File Saving.

// sz: size
let sz = cvs.size()
// NaN set
let startDraw = 0;
let displayColorSquare = 1;
let displayShowInfo = 1;

function Logoii(iisz,xx,yy,egap,elen,eelengap){

  // ii: whole ii logo
  // e: eye or ear, gl/iisz[1]
  // eelengap: ear_len(or eyeeargap) / iisz[1]
  
  this.sz = iisz
  let ww = this.sz[0]
  let hh = this.sz[1]


  let ear_l_top = [xx+0.5*(1-egap)*ww,yy+(0.5-elen)*hh]
  let ear_l_btm = [xx+0.5*(1-egap)*ww,yy+0.5*hh]
  let ear_r_top = [xx+0.5*(1+egap)*ww,yy+(0.5-elen)*hh]
  let ear_r_btm = [xx+0.5*(1+egap)*ww,yy+0.5*hh]
  this.ear_l = [...ear_l_top,...ear_l_top,...ear_l_btm,...ear_l_btm]
  this.ear_r = [...ear_r_top,...ear_r_top,...ear_r_btm,...ear_r_btm]

  let eye_l_top = [xx+0.5*(1-egap)*ww,yy+(0.5+eelengap*1)*hh]
  let eye_l_btm = [xx+0.5*(1-egap)*ww,yy+(0.5+eelengap*1.1)*hh]
  let eye_r_top = [xx+0.5*(1+egap)*ww,yy+(0.5+eelengap*1)*hh]
  let eye_r_btm = [xx+0.5*(1+egap)*ww,yy+(0.5+eelengap*1.1)*hh]
  this.eye_l = [...eye_l_top,...eye_l_top,...eye_l_btm,...eye_l_btm]
  this.eye_r = [...eye_r_top,...eye_r_top,...eye_r_btm,...eye_r_btm]
}

Logoii.prototype.init = function(){

  noFill();
  stroke(255);
  strokeWeight(24);

  bezier(...this.ear_l)
  bezier(...this.ear_r)
  bezier(...this.eye_l)
  bezier(...this.eye_r)
}

function setup() {
  
  objCvs = createCanvas(...sz);
  background(...colorBg);
  blendMode(BLEND);
}

function draw() {
  let iiww = 0.22*sz[0]
  let iihh = 0.22*sz[0]
  let iixx = 0.5*(sz[0]-iiww)
  let iiyy = 0.5*(sz[1]-iihh)
  background(...colorBg);
  fill(0,50)
  noStroke()
  rect(iixx,iiyy,iiww,iihh)


  let ii = new Logoii(iisz=[iiww,iihh],xx=iixx,yy=iiyy,egap=0.333,elen=0.5,eelengap=0.25)

  ii.init()

  // colorSquire();
  // showInfo();
  
}


function keyPressed(){
  if (key==" "){
    randomColor();
    clear();
    background(colorBg);
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
  mdv = [mouseX,mouseY];
}

function mouseReleased(){
  mdv.push(mouseX);
  mdv.push(mouseY);
  mdv.push((mdv[2]-mdv[0])/1);  //[4]
  mdv.push((mdv[3]-mdv[1])/1);  //[5]
  mdv.push((mdv[2]-mdv[0])/width);  //[6]
  mdv.push((mdv[3]-mdv[1])/height); //[7]
  startDraw=1;

}

function mouseDragged(){
  // gFront.clear();
  // gMid.clear();
  if (mouseButton === LEFT) {
    matchColor();
    // background(colorBg);
  }
  else if (mouseButton === CENTER) {

  }
  else if (mouseButton === RIGHT) {
    text("I dont have middle button",cvs.center()[0],cvs.center()[1]);
  }
  clear();
  colorSquire();
  showInfo();
  background(...colorBg);
  
}