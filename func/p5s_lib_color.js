
let ifDisplayColorSquare=1


let style = {
  rangeHueDynamic: 0.1,  // 0-1
  saturationStroke: 50,
  saturationBg: 50,
  lightFront:80,
  contrast:20,  //% 对比度
  alphaFront: 100,
  alphaMid: 0,
  alphaBg: 100,
}

let fHue,fSaturation,fLight,fAlpha;
let bHue,bSaturation,bLight,bAlpha;
let mHue,mSaturation,mLight,mAlpha;
let colorFront,colorBg,colorMid;


function matchColor(range=[35,65]){
  let vrel = mousePositionValue(range);
  let vabs = mousePositionValue();
  let tmpArr = [];


  tmpArr = loop_in_range([
    vabs[0],
    style.saturationStroke*(1-vabs[3]),
    vabs[1],
    style.alphaFront
  ]);
  [fHue,fSaturation,fLight,fAlpha]=tmpArr;

  tmpArr = loop_in_range([
    (vabs[0]%(100-range[0])+range[0]),
    style.saturationBg*(1-vabs[3]),
    100-vabs[1],
    style.alphaBg
  ]);
  [bHue,bSaturation,bLight,bAlpha]=tmpArr;

  tmpArr = loop_in_range([
    (vabs[1]),
    width*(vrel[0]),
    50,
    style.alphaMid
  ]);
  [mHue,mSaturation,mLight,mAlpha]=tmpArr;
  
  setColorSystem();
}







function setColorSystem(){
  colorFront = [fHue,fSaturation,fLight,fAlpha];
  colorBg = [bHue,bSaturation,bLight,bAlpha];
  colorMid = [mHue,mSaturation,mLight,mAlpha];
}

function resetColorSystem(){
  [fHue,fSaturation,fLight,fAlpha]=[0,style.saturationStroke,80,80];
  [bHue,bSaturation,bLight,bAlpha]=[0,style.saturationBg,50,80];
  [mHue,mSaturation,mLight,mAlpha]=[0,style.saturationBg,40,80];
  setColorSystem();
}

resetColorSystem();


function setColor(type=0,rdm=0){
  let mus;
  if (rdm==1) {
    mus = [Math.random()*100,Math.random()*100];
  }
  else {
    mus = mousePositionValue();
  }
  
  // type: 0=hue, 1=saturation, 2=light, 3=alpha
  colorFront[type]                 = mathRound(mus[0],0); // x position %
  colorBg[type] = colorMid[type]   = mathRound(mus[1],0); // y position %
}

function randomColor(){
  for (let i=0;i<4;i++){
    setColor(i,1);
  }
}



function colorSquire(gColorSquare=createGraphics(...cvs.size())){
  if (ifDisplayColorSquare==1){

    gColorSquare.clear();

    gColorSquare.colorMode(HSL,100);
    gColorSquare.strokeWeight(1);
    gColorSquare.stroke(100);
    gColorSquare.rectMode(CENTER);

    // gColorSquare.fill(colorBg);
    gColorSquare.fill(colorBg[0],colorBg[1],colorBg[2],100);
    gColorSquare.stroke(0,100,50);
    gColorSquare.rect(...cvs.center(),0.44*cvs.size()[0],0.44*cvs.size()[1]);
    gColorSquare.fill(colorMid[0],colorMid[1],colorMid[2],100);
    gColorSquare.stroke(30,100,50);
    gColorSquare.rect(...cvs.center(),0.33*cvs.size()[0],0.33*cvs.size()[1]);
    // gColorSquare.fill(colorFront);
    gColorSquare.stroke(70,100,50);
    gColorSquare.fill(colorFront[0],colorFront[1],colorFront[2],100);
    gColorSquare.rect(...cvs.center(),0.22*cvs.size()[0],0.22*cvs.size()[1]);
    image(gColorSquare,0,0);
  }
}


function showInfo(gInfo=createGraphics(...cvs.size())){
  if (ifDisplayColorSquare==1){

    let i=0;
    let a = "";
    let fontsz = 16;

    gInfo.clear();
    gInfo.colorMode(HSL,100);
    gInfo.fill(colorFront[0],colorFront[1],(100-colorFront[2]),100);
    gInfo.noStroke();
    gInfo.textAlign(CENTER,BOTTOM);
    gInfo.textSize(fontsz);

    a = "colorFront: "+colorFront;
    gInfo.fill(colorFront[0],colorFront[1],(100-colorFront[2]),100);
    gInfo.fill(...colorFront);
    gInfo.text(a,cvs.center()[0],cvs.center()[1]-0.44*0.5*cvs.size()[1]+fontsz*(1));
    i++;

    a = "colorMid: "+colorMid;
    gInfo.fill(colorMid[0],colorMid[1],(100-colorMid[2]),100);
    gInfo.fill(...colorMid);
    gInfo.text(a,cvs.center()[0],cvs.center()[1]+0.44*0.5*cvs.size()[1]+fontsz*(1));
    i++;

    a = "colorBg: "+colorBg;
    gInfo.fill(colorBg[0],colorBg[1],(100-colorBg[2]),100);
    gInfo.fill(...colorBg);
    gInfo.text(a,cvs.center()[0],cvs.center()[1]-0.33*0.5*cvs.size()[1]+fontsz*(1));
    i++;

    // infoTxt.push("Please move your mouse, and stop and wait a while.");
    // infoTxt.push("You will get a unique painting by your mouse movement.");

    // gInfo.text(infoTxt,12,20);
    image(gInfo,0,0);
  }
}


// // Color System
// class Clr {
  
// }