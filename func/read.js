// readlist
let oLI_readitem = []

function listread(){
    document.body.classList = "read"
    let content_wrapper = document.querySelector("#ul_content_list")
    content_wrapper.innerHTML = ""
    for (let itm in readlist){
        // create_sth(tagname,parentTagObj,id,innerhtml,css_class_litms)
        oLI_readitem[itm] = create_sth("li",content_wrapper,"read_itm","<a target='_blank' href='"+ readlist[itm]['log_content'] +"'>"+ readlist[itm]['title'] +"</a>","readitmcss");
        console.log()
    }
}
