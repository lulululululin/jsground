// readlist
let oLI_thinking = []

function thinking(){
    
    document.body.classList = "think"
    let content_wrapper = document.querySelector("#ul_content_list")
    content_wrapper.innerHTML = ""
    console.log(money[money.length-1])
    for (let itm in money[money.length-1]){
        // create_sth(tagname,parentTagObj,id,innerhtml,css_class_litms)
        if (money[money.length-1][itm]['posi']==undefined){
            money[money.length-1][itm]['posi'] = {}
            money[money.length-1][itm]['posi']['xx'] = Math.random()*window.innerWidth*0.76
            money[money.length-1][itm]['posi']['yy'] = Math.random()*(window.innerHeight - window.innerWidth*0.24-150)
        }
    }
    for (let itm in money[money.length-1]){
        // create_sth(tagname,parentTagObj,id,innerhtml,css_class_litms)
        let node = create_sth("li",content_wrapper,"read_itm","<span mean='"+ money[money.length-1][itm]['mean_from_cn'] +"'>"+ money[money.length-1][itm]['eng_word'][0] +"</span>","readitmcss");
        node.classList = "li_Think_node"
        node.style.left = money[money.length-1][itm]['posi']['xx']+"px"
        node.style.top = money[money.length-1][itm]['posi']['yy']+"px"
        oLI_thinking[itm] = node

        node.addEventListener("click",move_thinkNode)
        // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
        // https://developer.mozilla.org/en-US/docs/Web/Events
        // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
    }
    console.log(money[money.length-1])
}

let move_thinkNode = function(){
    this.style.background = "#009"
}
