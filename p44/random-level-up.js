const LevelUpProb = [100,60,36,22,13,8,5,3,2,1];
let level = 0;
let attempts = 0;

const getRandomBinaryResult = (x) => {
    return Math.random() * 100 < x;
}
const tryLevelUp = () => {
    if (getRandomBinaryResult(LevelUpProb[level])) {
        level++;
    }
    
    document.getElementById("current-level").innerText = level;
    document.getElementById("gauge-bar").style.width = (level / 10) * 100 + "%";

    attempts ++;
    document.getElementById("attempts").innerText = attempts;

    if (level === 10) clearInterval(intervalId);
    
    let intervalId = setInterval(work,50);
};
