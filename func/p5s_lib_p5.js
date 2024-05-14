

// Canvas Size
class Cvs {
    constructor(sz = [window.innerWidth, window.innerHeight], scl=1, pd=0){
		this.baseSz = sz;
		this.cvsScale = scl;
		this.cvspadding = pd;
		this.cvsCenterXY = [];
    this.cvsSz = [0,0]
	}
	size(){
		
        // this.baseSz = sz;
		// this.baseSz = [650,650];
		// this.baseSz = [2160,5120];
		// this.baseSz = [5120,3800];
		// this.baseSz = [2160,3800];
		// this.baseSz = [1024,1024];
		this.cvsSz = [
      Math.round(this.baseSz[0]*this.cvsScale-this.cvspadding),
      Math.round(this.baseSz[1]*this.cvsScale-this.cvspadding)
    ];
		return this.cvsSz;
	}
	center(){
		this.cvsCenterXY = [this.cvsSz[0]*0.5,this.cvsSz[1]*0.5];
		return this.cvsCenterXY;
	}
}

function mousePositionValue(r=[0,100]){
  let mouseXRate = mouseX/cvs.size()[0];
  let mouseYRate = mouseY/cvs.size()[1];
  let x01,y01,signx,signy;
  x01 = sin(0.5*PI*mouseXRate)**2*r[1]+r[0];  //sin(0 ~ PI/2) == 0 ~ 1
  y01 = sin(0.5*PI*mouseYRate)**2*r[1]+r[0];
  signx = -1*cos(PI*mouseXRate)**2;  //-( cos(0 ~ PI) )== -1 ~ 1
  signy = -1*cos(PI*mouseYRate)**2;
  return [mathRound(x01),mathRound(y01),mathRound(signx),mathRound(signy)];
}

