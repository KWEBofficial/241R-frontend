const probability = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];
let currentLevel = 0;
let attempts = 0;
const gaugeBarWidth = ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'];

const getRandomBinaryResult = (x) => {
    randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < x) {
        return true;
    }
    else {
        return false;
    }
};


const tryLevelUp = () => {
    if (currentLevel !== 10) {
        intervalId = setInterval(work, 50);
    }
    else {
        attempts = 0;
        currentLevel = 0;
        document.getElementById('attempts').innerText = 0;
        document.getElementById('current-level').innerText = 0;
        document.getElementById('gauge-bar').style.width = gaugeBarWidth[currentLevel];
    }
};

const work = () => {
    document.getElementById('attempts').innerText = ++attempts;
    if (getRandomBinaryResult(probability[currentLevel])) {
        document.getElementById('current-level').innerText = ++currentLevel;
    }
    document.getElementById('gauge-bar').style.width = gaugeBarWidth[currentLevel];
    if (currentLevel === 10) {
        clearInterval(intervalId);
    }
};