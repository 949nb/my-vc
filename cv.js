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

//点击跳转事件
function animate(time){
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for(var i = 0; i < aTags.length; i++){
    aTags[i].onclick = function(x){
        x.preventDefault()
        let a = x.currentTarget//把点击到的元素赋给a
        var href = a.getAttribute('href')//获取点击到的元素的href，也就是a的href
        console.log(href)
        var element = document.querySelector(href)
        var top = element.offsetTop
        //window.scrollTo(0, top - 80)
        let currentTop = window.scrollY
        let targetTop = top -80
        let s = targetTop - currentTop
        var coords = {y:currentTop};
        var t = Math.abs((s/100)*300)
        if(t>500){t = 500}
        var tween = new TWEEN.Tween(coords)
        .to({y:targetTop},t)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(
            function(){
            window.scrollTo(0,coords.y);
        }
        )
        .start();
    }
}
//点击跳转事件 Tween缓动

//Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
