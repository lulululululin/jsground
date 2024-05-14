
function divfooter(){
    let beian_footer = create_sth("div",document.body,"divfooter",'',"");
    return beian_footer
}

function beian(parentdiv){
    let beian_footer = create_sth("div",parentdiv,"beiandiv",'<a id="beianlink" href="https://beian.miit.gov.cn/" target="_blank">黑ICP备2024022813号</a>',"");
}
function p5jsref(parentdiv){
    let beian_footer = create_sth("div",parentdiv,"p5jsrefdiv",'<a id="p5jsreflink" href="/assets/p5-reference/index.html" target="_blank">p5js Reference</a>',"");
}

function commonfooter(){
    let ftr = divfooter()
    beian(ftr)
}
function p5sfooter(){
    let ftr = divfooter()
    beian(ftr)
    p5jsref(ftr)
}