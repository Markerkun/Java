let timerInterval;
let timeLeft = 0;

function startTimer() {
    if (timerInterval) return;

    timeLeft = Number(document.getElementById('timerInput').value);
    if (timeLeft <= 0) return;

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("Час вийшов!");
            return;
        }
        timeLeft--;
        updateTimerDisplay();
    }, 1000);

    updateTimerDisplay();
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function updateTimerDisplay() {
    const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const sec = String(timeLeft % 60).padStart(2, '0');
    document.getElementById('timer').textContent = `${min}:${sec}`;
}