const levelUpPercentage = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];
let level = 0;
let count = 0;
const getRandomBinaryResult = p => Math.random()*100 < p;

function tryLevelUp() {
    setInterval(() => {
        count += 1;
        if (getRandomBinaryResult(levelUpPercentage[level])) {
            level += 1;
            document.getElementById('current-level').innerText = level;
            document.getElementById('gauge-bar').style.width = level*10 + "%";
        }
        document.getElementById('attempts').innerText = count;
    }, 50);
}

