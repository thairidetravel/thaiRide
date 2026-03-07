<script>

function updateClock(){

let now = new Date();

let h = now.getHours().toString().padStart(2,'0');
let m = now.getMinutes().toString().padStart(2,'0');
let s = now.getSeconds().toString().padStart(2,'0');

let clock = document.getElementById("clock");

if(clock){
clock.innerHTML = h + ":" + m + ":" + s;
}

}

updateClock();
setInterval(updateClock,1000);


/* Fake visitor counter */

let count = 120 + Math.floor(Math.random()*80);

let visitors = document.getElementById("visitors");

if(visitors){
visitors.innerHTML = count;
}


/* Hero Slide */

let slideIndex = 0;
let slides = document.querySelectorAll(".hero-slide img");

function showSlide(){

slides.forEach(img => img.classList.remove("active"));

slideIndex++;

if(slideIndex > slides.length){
slideIndex = 1;
}

slides[slideIndex-1].classList.add("active");

}

showSlide();
setInterval(showSlide,4000);

</script>
