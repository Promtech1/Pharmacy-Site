var hamburger = document.querySelector(".hamburger")
var navbar = document.querySelector(".navbar")
var remove = document.querySelector(".mobile-nav")

hamburger.addEventListener("click", function(){
    console.log("open")

    if(hamburger.classList.contains("open")){
        hamburger.classList.remove("open");
        
    }else{
        hamburger.classList.add("open");
    }

    if(remove.classList.contains("first")){
        remove.classList.remove("first")
    }else{
        remove.classList.add("first")
    }


    if(remove.classList.contains("mobile-open")){
        remove.classList.remove("mobile-open")
    }else{
        remove.classList.add("mobile-open")
    }

    if(navbar.classList.contains("mini")){
        navbar.classList.remove("mini")
    }else{
        navbar.classList.add("mini")
    }
})

const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".main-text");

readMoreBtn.addEventListener("click", (e)=>{
    text.classList.toggle("show")
})