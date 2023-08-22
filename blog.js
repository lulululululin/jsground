// 这么简陋, 也能用, 也优点条例是不? 也算点价值.

function blog_from(contentlist){

    let listTitle = (title,pitm)=>{
        let itm_tt = document.createElement("h3")
        itm_tt.innerHTML = title
        pitm.appendChild(itm_tt)
    }

    let listDate = (date,pitm)=>{
        let itm_dt = document.createElement("div")
        itm_dt.classList = "date"
        itm_dt.innerHTML = date
        pitm.appendChild(itm_dt)
    }

    let listPara = (plist,pitm)=>{
        for (pp in plist) {
            let itm_p = document.createElement("p")
            itm_p.innerHTML = plist[pp]
            pitm.appendChild(itm_p)
            if (pp>1) {
                break
            }
        }
    }

    let addListItm = (content,listRoot)=>{
        
        let itm = document.createElement("li")
        itm.classList = "blogitem"

        listTitle(content['title'],itm)
        listDate(content['date'],itm)
        listPara(content.para,itm)

        listRoot.appendChild(itm)

    }

    let ulroot = document.querySelector("#ul_blog")
    for (let ii = 0; ii<contentlist.length; ii++) {
        if (contentlist[ii].isshit==true){
            addListItm(contentlist[ii],ulroot)
        }
    }
}

