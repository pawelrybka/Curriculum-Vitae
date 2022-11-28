const burger = document.querySelector(".burger");
const menu = document.querySelector(".burger-menu");
const header = document.querySelector("header")

burger.addEventListener("click", () => {
    menu.classList.toggle("active")
    burger.classList.toggle("active")
})

window.onscroll = function(){
    if(window.scrollY > 22){
        header.classList.add("headerShadow")
    }
    else{
        header.classList.remove("headerShadow")
    }

}

