// 这么简陋, 也能用, 也有点条例是不? 也算点价值.

function blog_from(pmArr_logs){

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

    let fLog_paragraph = (pmARR_paragraphs, pmINT_show=3, pmLI_log)=>{
        for (idx in pmARR_paragraphs) {

            let oP_1para = document.createElement("p")
            oP_1para.innerHTML = pmARR_paragraphs[idx]

            pmLI_log.appendChild(oP_1para)

            if ((pmINT_show==null)) {
                pmINT_show=3
            }

            if ((idx>pmINT_show-2) && (pmINT_show>0) ) {
                // 大于1, 会显示3段, 分别是0,1,2, 
                // 2显示完了, 才跳出循环. 这样太不直观了, 怎么办?
                break
            }
        }
    }

    let fLoglist_add = (pmOjb_content,listRoot)=>{
        
        let oLI_log = document.createElement("li")
        oLI_log.classList = "blogitem"

        fLog_title(pmOjb_content['title'],oLI_log)
        fLog_date(pmOjb_content['date'],oLI_log)
        fLog_paragraph(pmOjb_content['para'],pmOjb_content['show'],oLI_log)

        listRoot.appendChild(oLI_log)

    }

    let ulroot = document.querySelector("#ul_blog")
    for (let ii = 0; ii<pmArr_logs.length; ii++) {
        fLoglist_add(pmArr_logs[ii],ulroot)
    }
}

function markright(linestr){
    // my 'markdown' interpreter

}
