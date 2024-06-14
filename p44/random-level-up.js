const getRandomBinaryResult = (chance) => {
    return Math.random() * 100 < chance;
}

var level;
var attempts;
const chances = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1, 0];
var loopID = -1;

const work = () => {
    level += getRandomBinaryResult(chances[level]) ? 1 : 0;
    attempts += 1;

    document.getElementById('current-level').innerText = level;
    document.getElementById('attempts').innerText = attempts;
    document.getElementById('gauge-bar').style.length = 30 * level;

    if (level == 10) {
        clearInterval(loopID);
        loopID = -1;
    }
}

const tryLevelUp = () => {
    level = 0;
    attempts = 0;
    if (loopID != -1) clearInterval(loopID);
    loopID = setInterval(work, 50);
}