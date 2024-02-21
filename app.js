const display = document.getElementById("display");

let timer = null;

let startTime = 0;

let elapsedTime = 0;

let isRunning = false;

const startBtn = document.getElementById("startBtn");

const stopBtn = document.getElementById("stopBtn");

const resetBtn = document.getElementById("resetBtn");



const start = () => {
    if (isRunning === false) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;

    }


}

const stop = () => {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }

}

const reset = () => {
    clearInterval(timer);


    startTime = 0;

    elapsedTime = 0;

    isRunning = false;

    display.textContent = "00:00:00:00";

}

startBtn.addEventListener("click", start);

stopBtn.addEventListener("click", stop);

resetBtn.addEventListener("click", reset);

const update = () => {
    const currTime = Date.now();
    elapsedTime = currTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, '0'); //1000 millisceondi/60 sec/60 min
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, '0');;
    let seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, '0');;
    let milliseconds = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2, '0');;

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}

