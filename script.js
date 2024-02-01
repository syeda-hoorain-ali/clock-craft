const hourHand = document.getElementById('hour-hand');
const minHand = document.getElementById('min-hand');
const secHand = document.getElementById('sec-hand');

function setTime() {
    let time = new Date().toLocaleString().split(" ")[1];

    let hours = time.split(":")[0];
    let mins = time.split(":")[1];
    let secs = time.split(":")[2];

    hourHand.style.rotate = (hours * 30) + 'deg';
    minHand.style.rotate = (mins * 6) + 'deg';
    secHand.style.rotate = (secs * 6) + 'deg';
}


setInterval(setTime, 1000);