window.onload = () => {
    let btnstart = document.getElementById("start");
    btnstart.addEventListener("click", startbottom);

    let btnstop = document.getElementById("stop");
    btnstop.addEventListener("click", stopbottom);

    let btnreset = document.getElementById("reset");
    btnreset.addEventListener("click", resetbottom);
  };

  let run = false;
  let miliseconds = 0;
  let seconds = 0;
  let minutes = 0;
  let intervalo;

  function startbottom() {
    if (!run) {
      run = true;
      document.getElementById("start").disabled = true;
      intervalo = setInterval(Timer, 10);
    }
  }

  function stopbottom() {
    run = false;
    document.getElementById("start").disabled = false;
    clearInterval(intervalo);
  }

  function resetbottom() {
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById("miliseconds").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
  }

  function Timer() {
    if (run) {
      miliseconds++;
      if (miliseconds == 100) {
        miliseconds = 0;
        seconds++;
      }

      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }

      let milisecondsDisplay = document.getElementById("miliseconds");
      milisecondsDisplay.innerHTML = miliseconds < 10 ? "0" + miliseconds : miliseconds;
      
      let secondsDisplay = document.getElementById("seconds");
      secondsDisplay.innerHTML = seconds < 10 ? "0" + seconds : seconds;
      
      let minutesDisplay = document.getElementById("minutes");
      minutesDisplay.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    }
  }