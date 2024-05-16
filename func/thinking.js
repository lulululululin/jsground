// readlist
let oLI_thinking = []
let ismoving = 0
let last_topic
function thinking(){
    
    document.body.classList = "think"

    let content_wrapper = document.querySelector("#ul_content_list")

    content_wrapper.innerHTML = ""

    last_topic = thoughts[thoughts.length-1]

    let this_item

    for (let itm in last_topic){

        // create_sth(tagname,parentTagObj,id,innerhtml,css_class_litms)
        this_item = last_topic[itm]
        this_item['orderid'] = itm

        if (this_item['posi']==undefined){
            this_item['posi'] = {}
            this_item['posi']['xx'] = parseInt(Math.random()*window.innerWidth*0.76)+"px"
            this_item['posi']['yy'] = parseInt(Math.random()*(window.innerHeight - window.innerWidth*0.24-150))+"px"
        }
        
        // create_sth(tagname,parentTagObj,id,innerhtml,css_class_litms)
        let node = create_sth("li",content_wrapper,"read_itm","<span orderid='"+itm+"' mean='"+ thoughts[thoughts.length-1][itm]['mean_from_cn'] +"'>"+ thoughts[thoughts.length-1][itm]['eng_word'][0] +"</span>","readitmcss");
        node.classList = "li_Think_node"
        node.style.left = this_item['posi']['xx']
        node.style.top = this_item['posi']['yy']
        node.draggable = true
        oLI_thinking[itm] = node
        
        // https://zh.javascript.info/mouse-drag-and-drop

        function etdd(event){
            let theNode = event.target
            let wrapper = theNode.parentElement.parentElement
            let wrapperx = wrapper.offsetTop
            let wrappery = wrapper.offsetLeft
            event.preventDefault();

            function move_at(event){
                theNode.style.left = parseInt(event.pageX - wrapperx - theNode.offsetWidth*1.1) + 'px'
                theNode.style.top = parseInt(event.pageY - wrappery - theNode.offsetHeight*2.1) + 'px'

                wrapperbox = content_wrapper.getBoundingClientRect()

                last_topic[this_item['orderid']]['posi']['xx'] = parseInt(event.pageX - wrapperx - theNode.offsetWidth*1.1) + 'px'
                last_topic[this_item['orderid']]['posi']['yy'] = parseInt(event.pageY - wrappery - theNode.offsetHeight*2.1) + 'px'

            }
            document.addEventListener("mousemove",move_at)

            function cancleMove(event){
                document.removeEventListener('mousemove', move_at)
            }
            document.addEventListener("mouseup",cancleMove)
            console.log(last_topic)
        }
        node.addEventListener("mousedown",etdd,true)
        
    }
}

let move_thinkNode = function(node){
    node.classList.add = "dragged"
    node.style.backgroundColor = "#ccf"
}
