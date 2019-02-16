setTimeout(function(){
    loadingPage.classList.remove("active")
},2000
    )
//loading页面计时器···

window.onscroll = function(){
    if(scrollY>0){
        topBar.classList.add("active")
    }else{
        topBar.classList.remove("active")
    }
}


var subMenu = document.getElementById("subMenu")

subMenu.onmouseenter = function(){
    submenu.classList.add("active")
}
subMenu.onmouseleave = function(){
    submenu.classList.remove("active")
}

var aTags = document.querySelectorAll(".top-nav-bar > ul > li > a")

for(var i = 0; i < aTags.length; i++){
    aTags[i].onclick = function(x){
        x.preventDefault()
        let a = x.currentTarget//把点击到的元素赋给a
        var href = a.getAttribute('href')//获取点击到的元素的href，也就是a的href
        console.log(href)
        var element = document.querySelector(href)
        var top = element.offsetTop
        window.scrollTo(0,top - 80)
    }
}