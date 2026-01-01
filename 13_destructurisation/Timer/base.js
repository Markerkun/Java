let stopwatchInterval;
let milliseconds = 0;

function startStopwatch() {
    if (stopwatchInterval) return;

    stopwatchInterval = setInterval(() => {
        milliseconds += 10;

        const ms = String(Math.floor((milliseconds % 1000) / 10)).padStart(2, '0');
        const sec = String(Math.floor(milliseconds / 1000) % 60).padStart(2, '0');
        const min = String(Math.floor(milliseconds / 60000)).padStart(2, '0');

        document.getElementById('stopwatch').textContent = `${min}:${sec}:${ms}`;
    }, 10);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    milliseconds = 0;
    document.getElementById('stopwatch').textContent = "00:00:00";
}