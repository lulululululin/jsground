
var create_sth = function(elm,pElm,id,ih,clslst){
    var oItem = document.createElement(elm);
    oItem.id = id;
    oItem.classList = elm+"css "+clslst;
    oItem.innerHTML = ih;
    pElm.appendChild(oItem);
    return oItem;
}

function page_main(){
    
    let oDIV_main = create_sth("div",document.body,"main","","maincss");

    let oH1_logo = create_sth("h1",oDIV_main,"logo","Geekii","logocss");

    let oUL_func_nav = create_sth("ul",oDIV_main,"ul_func_nav","","navcss");
    let oLI_navbtn_read = create_sth("li",oUL_func_nav,"ul_func_nav","<a>reading</a>","btncss");
    let oLI_navbtn_thinking = create_sth("li",oUL_func_nav,"ul_func_nav","<a>thinking</a>","btncss");
    let oLI_navbtn_blog = create_sth("li",oUL_func_nav,"ul_func_nav","<a>log</a>","btncss");
    let oLI_navbtn_and = create_sth("li",oUL_func_nav,"ul_func_nav","<small>and ...how 2</small>","btncss");
    let oLI_navbtn_tao = create_sth("li",oUL_func_nav,"ul_func_nav","<a>tao</a>","btncss");

    oLI_navbtn_blog.addEventListener("click",()=>{
        listblog()
    })
    oLI_navbtn_tao.addEventListener("click",()=>{
        // tao()
    })
    oLI_navbtn_read.addEventListener("click",()=>{
        listread()
    })
    oLI_navbtn_thinking.addEventListener("click",()=>{
        thinking()
    })

    

    let oUL_contents = create_sth("ul",oDIV_main,"ul_content_list","","contentlistcss");
    
}

let loglist = []
let readlist = []

