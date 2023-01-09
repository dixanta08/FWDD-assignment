
var articles = document.querySelectorAll("article h3")
var inputEl = document.querySelector("input")
var btnEl = document.querySelector("form button")
btnEl.addEventListener("click",searchBlog)

function searchBlog(){
    searchKeys = inputEl.value.split(" ")
    articles.forEach(article =>{
        article.parentElement.classList.remove("hide")
        var x = 0
        searchKeys.forEach(searchKey=>{
            var str_pos = article.textContent.toLowerCase().indexOf(searchKey.toLowerCase())
            if (str_pos > -1) {
                x = x+1
              } 
        })
        if (x==0){
            article.parentElement.classList.add("hide")
        }
})
    var articlesCount = document.querySelectorAll("article:not(.hide)").length

    console.log(articlesCount)
    if(articlesCount==0){
        document.querySelector("#blogs_body h2").textContent="No Such Blog Found"
    }
}

