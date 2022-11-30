const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const header = document.querySelector("header")
const menuLinks = document.querySelectorAll(".menu-link")

burger.addEventListener("click", () => {
    menu.classList.toggle("active")
    burger.classList.toggle("active")
})

function scrollHeader(){
    if(window.scrollY > 0){
        header.classList.add("headerShadow")
    }
    else{
        header.classList.remove("headerShadow")
    }
}

window.addEventListener("scroll", scrollHeader)
   
menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const key = e.target.dataset.key;
        const section = document.querySelector(`.${key}`).getBoundingClientRect().top + window.pageYOffset - 65;
        
        menu.classList.remove("active");
        burger.classList.remove("active");

        window.scrollTo({ top: section, behavior: "smooth" });
    })
});



