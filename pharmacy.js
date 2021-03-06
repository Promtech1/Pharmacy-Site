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

//For the first news
const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".main-text");

readMoreBtn.addEventListener("click", (e)=>{
    text.classList.toggle("show")
    if(readMoreBtn.innerText === "Read more..."){
        readMoreBtn.innerText = "Read less";
    }else{
        readMoreBtn.innerText = "Read more..."
    }
})

//This id for the second news
const readMoreBtn2 = document.querySelector(".read-more-btn2");
const text2 = document.querySelector(".main-text2");

readMoreBtn2.addEventListener("click", (e)=>{
    text2.classList.toggle("show2")
    if(readMoreBtn2.innerText === "Read more..."){
        readMoreBtn2.innerText = "Read less";
    }else{
        readMoreBtn2.innerText = "Read more..."
    }
})

//This id for the third news
const readMoreBtn3 = document.querySelector(".read-more-btn3");
const text3 = document.querySelector(".main-text3");

readMoreBtn3.addEventListener("click", (e)=>{
    text3.classList.toggle("show3")
    if(readMoreBtn3.innerText === "Read more..."){
        readMoreBtn3.innerText = "Read less";
    }else{
        readMoreBtn3.innerText = "Read more..."
    }
})

//This id for the forth news
const readMoreBtn4 = document.querySelector(".read-more-btn4");
const text4 = document.querySelector(".main-text4");

readMoreBtn4.addEventListener("click", (e)=>{
    text4.classList.toggle("show4")
    if(readMoreBtn4.innerText === "Read more..."){
        readMoreBtn4.innerText = "Read less";
    }else{
        readMoreBtn4.innerText = "Read more..."
    }
})


let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n)
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if(n > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "")
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}