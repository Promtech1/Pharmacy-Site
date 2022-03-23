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


const parentContainer = document.querySelector(".same5");

parentContainer.addEventListener("click", event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes("read-more-btn");

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector("read-more-text");

    currentText.classList.toggle("read-more-text-show")
})