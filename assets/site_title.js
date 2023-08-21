function page_main(){
    let maindiv = document.createElement("div")
    maindiv.id = "main"

    let logoh1 = document.createElement("h1")
    logoh1.id = "logo"
    logoh1.innerHTML = "小路"
    maindiv.appendChild(logoh1)

    let blogul = document.createElement("ul")
    blogul.id = "ul_blog"
    maindiv.appendChild(blogul)

    document.body.appendChild(maindiv)

}

let contentlist = []

