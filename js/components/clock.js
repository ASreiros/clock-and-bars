const Alumnidate = new Date(2022, 05, 13, 12, 0, 0, 0).getTime();
setInterval(countdownclock,1000);


function countdownclock() {
miliseconds = Alumnidate - Date.now();
if (miliseconds < 0) {
    miliseconds = 0;
}
    let seconds = Math.round(miliseconds / 1000);
    const dayT = Math.floor(seconds / 864000);
    seconds = seconds - dayT * 864000;
    const day = Math.floor(seconds / 86400);
    seconds = seconds - day * 86400;
    const hourT = Math.floor(seconds / 36000);
    seconds = seconds - hourT * 36000;
    const hour = Math.floor(seconds / 3600);
    seconds = seconds - hour * 3600;
    const minutesT = Math.floor(seconds / 600);
    seconds = seconds - minutesT * 600;
    const minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;
    const secondT = Math.floor(seconds / 10);
    seconds = seconds - secondT * 10;
    const dayTvalue = document.getElementById('dayT');
    dayTvalue.innerHTML = dayT;
    const dayvalue = document.getElementById('day');
    dayvalue.innerHTML = day;
    const hourTvalue = document.getElementById('hourT');
    hourTvalue.innerHTML = hourT;
    const hourvalue = document.getElementById('hour');
    hourvalue.innerHTML = hour;
    const minuteTvalue = document.getElementById('minuteT');
    minuteTvalue.innerHTML = minutesT;
    const minutevalue = document.getElementById('minute');
    minutevalue.innerHTML = minutes;
    const secondTvalue = document.getElementById('secondT');
    secondTvalue.innerHTML = secondT;
    const secondvalue = document.getElementById('second');
    secondvalue.innerHTML = seconds;
    console.log("ping");
return
}
