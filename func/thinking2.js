// readlist
let oLI_thinking = []
let ismoving = 0
function thinking(){
    
    document.body.classList = "think"

    let content_wrapper = document.querySelector("#ul_content_list")

    content_wrapper.innerHTML = ""

    last_topic = thoughts[thoughts.length-1]

    let this_item

    for (let itm in last_topic){
        console.log("init moving",ismoving)
        // create_sth(tagname,parentTagObj,id,innerhtml,css_class_litms)
        this_item = last_topic[itm]

        if (this_item['posi']==undefined){
            this_item['posi'] = {}
            this_item['posi']['xx'] = parseInt(Math.random()*window.innerWidth*0.76)+"px"
            this_item['posi']['yy'] = parseInt(Math.random()*(window.innerHeight - window.innerWidth*0.24-150))+"px"
        }
        
        // create_sth(tagname,parentTagObj,id,innerhtml,css_class_litms)
        let node = create_sth("li",content_wrapper,"read_itm","<span mean='"+ thoughts[thoughts.length-1][itm]['mean_from_cn'] +"'>"+ thoughts[thoughts.length-1][itm]['eng_word'][0] +"</span>","readitmcss");
        node.classList = "li_Think_node"
        node.style.left = this_item['posi']['xx']
        node.style.top = this_item['posi']['yy']
        node.draggable = true
        oLI_thinking[itm] = node
        

        // https://zh.javascript.info/mouse-drag-and-drop
        node.onmousedown = drgandrp
        function drgandrp(event){
            console.log("start moving",ismoving)

            node.style.visibility = 'hidden'
            event.preventDefault();

            document.body.append(node)
    
            function moveAt(somenode, pageX, pageY){
                somenode.style.left = pageX - somenode.offsetWidth / 2 + 'px'
                somenode.style.top = pageY - somenode.offsetHeight / 2 + 'px'
                
                wrapperbox = content_wrapper.getBoundingClientRect()

                this_item['posi']['xx'] = (parseInt(somenode.style.left) - wrapperbox.x) + "px"
                this_item['posi']['yy'] = (parseInt(somenode.style.top) - wrapperbox.y) + "px"
            }

            function onMouseMove(event){
                moveAt(node, event.pageX, event.pageY)
                node.style.visibility = 'visible'
                move_thinkNode(node)
            }

            function cancleMove(event){
                document.removeEventListener('mousemove', onMouseMove)
                node.onmouseup=null
                node.onmousedown=null
                ismoving = 0
                console.log("end moving",ismoving)
            }
            
            if (ismoving==0){
                document.addEventListener('mousemove', onMouseMove)
                ismoving = 1
            }

            if (ismoving==1){
                node.onmouseup = ()=>{
                    cancleMove()
                }
                node.onmousedown = ()=>{
                    cancleMove()
                }
            }

            console.log("result moving",ismoving)
            // console.log(last_topic)

        }

        // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
        // https://developer.mozilla.org/en-US/docs/Web/Events
        // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
    }
}

let move_thinkNode = function(node){
    node.classList.add = "dragged"
    node.style.backgroundColor = "#ccf"
}
