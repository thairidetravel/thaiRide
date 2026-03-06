function updateClock(){

const now=new Date();

document.getElementById("clock").innerHTML=now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

function updateVisitors(){

let count=Math.floor(Math.random()*500)+100;

document.getElementById("visitors").innerText=count;

}

setInterval(updateVisitors,5000);

updateVisitors();
