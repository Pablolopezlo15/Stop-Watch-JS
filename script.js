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
    }

}

function stopbottom() {
    run = false;
    btnstart.disabled = false;
    clearInterval(intervalo);
    clearInterval(intervalo2);
}

function resetbottom() {
    seconds = document.getElementById("seconds").innerHTML = "00";
    minutes = document.getElementById("minutes").innerHTML = "00";

}

function secondsTimer() {
    if (run) {
        if(seconds == 59){
            seconds = -1;
        }
        else{
            seconds++;
            if (seconds < 10) { 
                seconds = "0"+seconds;
            }
            secondsdisplay = document.getElementById("seconds").innerHTML = seconds;
            secondsdisplay.innerHTML = ":"+seconds;
        }
        
    }


}

function minutesTimer() {
    if (run) {
        if(minutes == 59){
            minutes = 0;
        }
        else{
            minutes++;
            if (minutes < 10) { 
                minutes = "0"+minutes;
            }
            minutesdisplay = document.getElementById("minutes").innerHTML = minutes;
            minutesdisplay.innerHTML = ":"+minutes;
        }
    }
}

