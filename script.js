const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYears = "17 June 2021";

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    let Totalseconds  = Math.abs((newYearsDate.getTime() - currentDate.getTime())) / 1000;
    const days = Math.floor(Totalseconds / 86400);
    Totalseconds -= days * 86400;
    const hours = Math.floor(Totalseconds / 3600) % 24;
    Totalseconds -= hours * 3600;
    const minutes = Math.floor(Totalseconds / 60) % 60;
    Totalseconds -= minutes * 60;
    const sec = Math.floor(Totalseconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(sec);    
    console.log(days, hours, minutes, sec, Totalseconds);
    
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
// initial call
countDown();

setInterval(countDown, 1000);
