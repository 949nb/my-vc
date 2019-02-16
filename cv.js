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

