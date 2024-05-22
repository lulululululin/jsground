// 这么简陋, 也能用

function listblog(){
    document.body.classList = "log"

    pmArr_logs = loglist.reverse()
    // loglist was defined in "main.js"
    
    let content_wrapper = document.querySelector("#ul_content_list")
    content_wrapper.innerHTML = ""

    let fLog_title = (pmStr_title,pmLI_log)=>{
        let oH3_logtitle = document.createElement("h3")
        oH3_logtitle.innerHTML = pmStr_title
        pmLI_log.appendChild(oH3_logtitle)
    }

    let fLog_date = (pmStr_date,pmLI_log)=>{
        let oDIV_date = document.createElement("div")
        oDIV_date.classList = "date"
        oDIV_date.innerHTML = pmStr_date
        pmLI_log.appendChild(oDIV_date)
    }

    let fLog_paragraph = (pm, pmLI_log)=>{

        pmINT_show = pm["show"]
        let oP_1para
        if (pm['md']==true){
            pmARR_paragraphs = marked.parse(pm["log_content"][0]).split("\\\r")
        }
        else {
            pmARR_paragraphs = pm["log_content"]
            console.log(pmARR_paragraphs)
        }
            
        for (idx in pmARR_paragraphs) {
            oP_1para = document.createElement("div")
            oP_1para.innerHTML = pmARR_paragraphs[idx]

            pmLI_log.appendChild(oP_1para)

            if ((pmINT_show==null)) {
                pmINT_show=3
            }
            else if ((pmINT_show==true)) {
                pmINT_show=30000000
            }

            if ((idx>pmINT_show-2) && (pmINT_show>0) ) {
                // 大于1, 会显示3段, 分别是0,1,2, 
                // 2显示完了, 才跳出循环. 这样太不直观了, 怎么办?
                break
            }
        }

    }

    let fLog_p5s = (pmStr_date,pmLI_log)=>{
        if (pmStr_date>0){
            // create_sth(elm,pElm,id,ih,clslst)
            let p5sdiv = create_sth("div",pmLI_log,"p5s"+String(pmStr_date),"","p5sdivcls")
            let p5sa = create_sth("a",p5sdiv,"p5sa"+String(pmStr_date),"","p5sacls")
            p5sa.href = "/data/p5s/"+String(pmStr_date)+".html"
            p5sa.target = "_blank"
            let p5simg = create_sth("img",p5sa,"p5simg"+String(pmStr_date),"","p5simgcls")
            p5simg.src = "/data/p5s/"+String(pmStr_date)+".png"
        }
    }

    let fLoglist_add = (pmOjb_content,listRoot)=>{
        
        let oLI_log = document.createElement("li")
        oLI_log.id = pmOjb_content['slug']
        oLI_log.classList = "blogitemcss"

        fLog_title(pmOjb_content['title'],oLI_log)
        fLog_date(pmOjb_content['date'],oLI_log)

        fLog_p5s(pmOjb_content['p5s'],oLI_log)
        fLog_paragraph(pmOjb_content,oLI_log)



        listRoot.appendChild(oLI_log)

    }

    let ulroot = document.querySelector("#ul_content_list")
    for (let ii = 0; ii<pmArr_logs.length; ii++) {
        fLoglist_add(pmArr_logs[ii],ulroot)
    }
}

function markright(linestr){
    // my 'markdown' interpreter

}
