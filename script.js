let timer;
let time = 0;
let isRunning = false;
const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapsList = document.getElementById('laps');
let lapsCounter = 1;

function displayTime() {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const milliseconds = Math.floor((time % 1) * 100).toFixed(0);
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            time += 0.01;
            displayTime();
        }, 10);
        isRunning = true;
        lapBtn.disabled = false;
        startBtn.textContent = 'Pause'; 
        startBtn.style.backgroundColor = 'red';
    } else {
        pauseTimer(); 
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = 'Resume'; 
    startBtn.style.backgroundColor = ''; 
    lapBtn.disabled = true;
}

function resetTimer() {
    clearInterval(timer);
    time = 0;
    displayTime();
    lapsList.innerHTML = '';
    lapsCounter = 1;
    isRunning = false;
    startBtn.textContent = 'Start'; 
    startBtn.style.backgroundColor = ''; 
    lapBtn.disabled = true; 
}

function lapTimer() {
    const lapTime = display.textContent;
    const lapListItem = document.createElement('li');
    lapListItem.textContent = `${lapTime}`;
    lapsList.appendChild(lapListItem);
    lapsCounter++;
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);
lapBtn.disabled = true;
