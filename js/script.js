let countdown;
const timerDisplayLeft = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const ctrlButtons = document.querySelectorAll("[data-time]");

function timer(seconds) {
    
    clearInterval(countdown); // clear any existing timers

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    
    countdown = setInterval(() => {

        const secondsLeft = Math.round((then - Date.now()) / 1000);
       
        // check when to stop

        if(secondsLeft < 0){

            clearInterval(countdown);
            return;
        }

        // display it

        displayTimeLeft(secondsLeft);

    }, 1000);
}


function displayTimeLeft(seconds) {

    const minutes = Math.floor(seconds / 60);
    const secondsRemain = seconds % 60;
    const display = `${minutes}:${secondsRemain < 10 ? "0" : "" }${secondsRemain}`;

    timerDisplayLeft.textContent = display;
}

function displayEndTime(timestamp) {

    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be back at ${hour}:${minutes < 10 ? "0" : ""}${minutes}`;
}


document.minutesInputForm.addEventListener('submit', function(e) {

    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();

  });


function startTimer() {

    const seconds = parseInt(this.dataset.time);
    timer(seconds);
    
  }
  
ctrlButtons.forEach(button => button.addEventListener("click", startTimer));

