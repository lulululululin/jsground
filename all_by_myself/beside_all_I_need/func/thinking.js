// readlist
let oLI_thinking = []

function thinking(){
    
    document.body.classList = "think"

    let content_wrapper = document.querySelector("#ul_content_list")

    content_wrapper.innerHTML = ""

    last_topic = money[money.length-1]

    for (let itm in last_topic){
        // create_sth(tagname,parentTagObj,id,innerhtml,css_class_litms)
        if (last_topic[itm]['posi']==undefined){
            last_topic[itm]['posi'] = {}
            last_topic[itm]['posi']['xx'] = Math.random()*window.innerWidth*0.76
            last_topic[itm]['posi']['yy'] = Math.random()*(window.innerHeight - window.innerWidth*0.24-150)
        }
        
        // create_sth(tagname,parentTagObj,id,innerhtml,css_class_litms)
        let node = create_sth("li",content_wrapper,"read_itm","<span mean='"+ money[money.length-1][itm]['mean_from_cn'] +"'>"+ money[money.length-1][itm]['eng_word'][0] +"</span>","readitmcss");
        node.classList = "li_Think_node"
        node.style.left = last_topic[itm]['posi']['xx']+"px"
        node.style.top = last_topic[itm]['posi']['yy']+"px"
        node.draggable = true
        oLI_thinking[itm] = node
        

        // https://zh.javascript.info/mouse-drag-and-drop
        node.onmousedown = function(event){
            node.style.visibility = 'hidden'
            event.preventDefault();


            document.body.append(node)
    
            function moveAt(somenode, pageX, pageY){
                somenode.style.left = pageX - somenode.offsetWidth / 2 + 'px'
                somenode.style.top = pageY - somenode.offsetHeight / 2 + 'px'
            }

            function onMouseMove(event){
                moveAt(node, event.pageX, event.pageY)
                node.style.visibility = 'visible'
                move_thinkNode(node)
            }

            document.addEventListener('mousemove', onMouseMove)

            node.onmouseup = ()=>{
                document.removeEventListener('mousemove', onMouseMove)
                node.onmouseup=null
            }
        }



        // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
        // https://developer.mozilla.org/en-US/docs/Web/Events
        // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
    }
    console.log(money[money.length-1])
}

let move_thinkNode = function(node){
    node.classList.add = "dragged"
    node.style.backgroundColor = "#ccf"
}
