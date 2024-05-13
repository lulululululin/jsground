

let objCvs;  // for Image File Saving.

let cvs = new Cvs([640,480],1,0);

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
  this.xx = xx
  this.yy = yy
  this.egap = egap
  this.elen = elen
  this.eelengap = eelengap
  
  this.sz = iisz
  this.ww = this.sz[0]
  this.hh = this.sz[1]

}

Logoii.prototype.init = function(){
  
  this.ear_l_top    = [this.xx + 0.5 * (1 - this.egap) * this.ww,this.yy + (0.5 - this.elen) * this.hh]
  this.ear_l_t_bar  = [this.xx + 0.5 * (1 - this.egap) * this.ww,this.yy + (0.5 - this.elen) * this.hh]

  this.ear_l_btm    = [this.xx + 0.5 * (1 - this.egap) * this.ww,this.yy + 0.5 * this.hh]
  this.ear_l_b_bar  = [this.xx + 0.5 * (1 - this.egap) * this.ww,this.yy + 0.5 * this.hh]

  this.ear_r_top    = [this.xx + 0.5 * (1 + this.egap) * this.ww,this.yy + (0.5 - this.elen) * this.hh]
  this.ear_r_t_bar  = [this.xx + 0.5 * (1 + this.egap) * this.ww,this.yy + (0.5 - this.elen) * this.hh]

  this.ear_r_btm    = [this.xx + 0.5 * (1 + this.egap) * this.ww,this.yy + 0.5 * this.hh]
  this.ear_r_b_bar  = [this.xx + 0.5 * (1 + this.egap) * this.ww,this.yy + 0.5 * this.hh]

  this.ear_l = [...this.ear_l_top,...this.ear_l_t_bar,...this.ear_l_btm,...this.ear_l_b_bar]
  this.ear_r = [...this.ear_r_top,...this.ear_r_t_bar,...this.ear_r_btm,...this.ear_r_b_bar]
  
  this.eye_l_top = [this.xx + 0.5 * (1 - this.egap) * this.ww,this.yy + (0.5 + this.eelengap * 1) * this.hh]
  this.eye_l_btm = [this.xx + 0.5 * (1 - this.egap) * this.ww,this.yy + (0.5 + this.eelengap * 1.1) * this.hh]

  this.eye_r_top = [this.xx + 0.5 * (1 + this.egap) * this.ww,this.yy + (0.5 + this.eelengap * 1) * this.hh]
  this.eye_r_btm = [this.xx + 0.5 * (1 + this.egap) * this.ww,this.yy + (0.5 + this.eelengap * 1.1) * this.hh]

  this.eye_l = [...this.eye_l_top,...this.eye_l_top,...this.eye_l_btm,...this.eye_l_btm]
  this.eye_r = [...this.eye_r_top,...this.eye_r_top,...this.eye_r_btm,...this.eye_r_btm]

}
Logoii.prototype.show = function(){
  
  fill(0,100)
  noStroke()
  rect(this.xx,this.yy,...this.sz)

  noFill();
  stroke(255);
  strokeWeight(24);

  bezier(...this.ear_l)
  bezier(...this.ear_r)
  bezier(...this.eye_l)
  bezier(...this.eye_r)

}
let ii,iiww,iihh,iixx,iiyy
function setup() {
  
  objCvs = createCanvas(...sz);
  background(...colorBg);
  blendMode(BLEND);

  iiww = 0.22 * sz[0]
  iihh = 0.22 * sz[0]
  iixx = 0.5 * (sz[0] - iiww)
  iiyy = 0.5 * (sz[1] - iihh)

  ii = new Logoii(iisz=[iiww,iihh],xx=iixx,yy=iiyy,egap=1/3,elen=0.5,eelengap=0.25)

}

function draw() {

  background(...colorBg);

  ii.init()
  ii.show()

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
  mdv.push((mdv[2] - mdv[0])/1);  //[4]
  mdv.push((mdv[3] - mdv[1])/1);  //[5]
  mdv.push((mdv[2] - mdv[0])/width);  //[6]
  mdv.push((mdv[3] - mdv[1])/height); //[7]
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
  // clear();
  // colorSquire();
  // showInfo();
  // background(...colorBg);
  
}