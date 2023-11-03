window.onload = () => {
    btnstart = document.getElementById("start");
    btnstart.addEventListener("click",startbottom);

    btnstop = document.getElementById("stop");
    btnstop.addEventListener("click", stopbottom);

    btnreset = document.getElementById("reset");
    btnreset.addEventListener("click", resetbottom);
}
let run = false;
seconds = 0;
minutes = 0;
hours = 0; 
let intervalo;

function startbottom(){
    if (!run){
        run = true;
        btnstart.disabled = true;
        intervalo = setInterval(secondsTimer, 1000);
        intervalo2 = setInterval(minutesTimer, 60000);
        intervalo3 = setInterval(hoursTimer, 3600000);
    }

}

function stopbottom() {
    run = false;
    btnstart.disabled = false;
    clearInterval(intervalo);
    clearInterval(intervalo2);
    clearInterval(intervalo3);
}

function resetbottom() {
    seconds = document.getElementById("seconds").innerHTML = "00";
    minutes = document.getElementById("minutes").innerHTML = "00";
    hours = document.getElementById("hours").innerHTML = "00";

}
function secondsTimer() {
    if (run) {
        if(seconds == 58){
            seconds = 1;
        }
        else{
            seconds++;
            secondsdisplay = document.getElementById("seconds").innerHTML = seconds;
        }
    }
}

function minutesTimer() {
    if (run) {
        if(minutes == 59){
            minutes = 1;
        }
        else{
            minutes++;
            minutesdisplay = document.getElementById("minutes").innerHTML = minutes;
        }
    }
}

function hoursTimer() {
    if (run) {
        if(hours == 10){
            document.write("Suficiente");
        }
        else{
            hours++;
            hoursdisplay = document.getElementById("seconds").innerHTML = hours;
        }
    }
}