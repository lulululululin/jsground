
// showGrid(50); 
setSpeed(200);

width(1);
color("blue");

goto(-(120+60),0);
right(90)
forward(120);
left(60)
forward(120);
right(120)
forward(120);
left(60)
forward(120);

function restore(pp){
    goto(pp[0],pp[1])
    angle(pp[2])
}

let getpp = ()=>{
    // let [xx,yy] = 还没有获取当前状态的方法
    // https://github.com/hanumanum/js-turtle/actions
}