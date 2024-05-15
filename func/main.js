let siteTitle = "极客与艺术"

var create_sth = function(elm,pElm,id,ih,clslst){
    var oItem = document.createElement(elm);
    oItem.id = id;
    oItem.classList = elm+"css "+clslst;
    oItem.innerHTML = ih;
    pElm.appendChild(oItem);
    return oItem;
}

async function clear_thought_nodes(){
    let thoughtnodes = document.querySelectorAll("body > li.li_Think_node")
    if (thoughtnodes.length > 0){
        for (let itm in thoughtnodes){
            console.log(typeof(thoughtnodes[itm]))
            thoughtnodes[itm].remove()
        }
    }
}

function page_main(){
    
    let oDIV_main = create_sth("div",document.body,"main","","maincss");

    let oH1_logo = create_sth("h1",oDIV_main,"logo",siteTitle,"logocss");

    let oUL_func_nav = create_sth("ul",oDIV_main,"ul_func_nav","","navcss");
    let oLI_navbtn_read = create_sth("li",oUL_func_nav,"oLI_navbtn_read","<a>reading</a>","btncss");
    let oLI_navbtn_thinking = create_sth("li",oUL_func_nav,"oLI_navbtn_thinking","<a>thinking</a>","btncss");
    let oLI_navbtn_blog = create_sth("li",oUL_func_nav,"oLI_navbtn_blog","<a>log</a>","btncss");
    let oLI_navbtn_and = create_sth("li",oUL_func_nav,"oLI_navbtn_and","<small>and ...how 2</small>","btncss");
    let oLI_navbtn_tao = create_sth("li",oUL_func_nav,"oLI_navbtn_tao","<a>tao</a>","btncss");

    oLI_navbtn_blog.addEventListener("click",()=>{
        clear_thought_nodes()
        listblog()
    })
    oLI_navbtn_tao.addEventListener("click",()=>{
        clear_thought_nodes()
        // tao()
    })
    oLI_navbtn_read.addEventListener("click",()=>{
        clear_thought_nodes()
        listread()
    })
    oLI_navbtn_thinking.addEventListener("click",()=>{
        clear_thought_nodes()
        thinking()
    })

    // oLI_navbtn_thinking.remove()
    oLI_navbtn_and.remove()
    oLI_navbtn_tao.remove()

    let oUL_contents = create_sth("ul",oDIV_main,"ul_content_list","","contentlistcss");
}

let loglist = []
let readlist = []

let letian = []

