<script>

/* CLOCK */

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


/* HERO SLIDE */

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


/* BOOKING → SEND TO LINE */

function sendBooking(){

let name = document.getElementById("name").value;
let contact = document.getElementById("contact").value;
let pickup = document.getElementById("pickup").value;
let dropoff = document.getElementById("dropoff").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;
let passengers = document.getElementById("passengers").value;
let vehicle = document.getElementById("vehicle").value;
let message = document.getElementById("message").value;

let text =
"🚐 ThaiRide Booking %0A%0A"+
"Name: "+name+"%0A"+
"Contact: "+contact+"%0A"+
"Pickup: "+pickup+"%0A"+
"Dropoff: "+dropoff+"%0A"+
"Date: "+date+"%0A"+
"Time: "+time+"%0A"+
"Passengers: "+passengers+"%0A"+
"Vehicle: "+vehicle+"%0A"+
"Message: "+message;

/* เปิด LINE พร้อมข้อความ */

window.open("https://line.me/R/msg/text/?"+text);

}

</script>
