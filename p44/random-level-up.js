const gaugeBar = document.getElementById('gauge-bar');
const currentLevel = document.getElementById('current-level');
const attempt = document.getElementById('attempts');
const successProb = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1]
let lvl;
let att;

const getRandomBinaryResult = (x) => {
    return (Math.random() * 100 < x);
}

const work = () => setInterval(() => {
    if (lvl === 10) clearInterval(work);
    else{
        if (getRandomBinaryResult(successProb[lvl])) {
            lvl += 1;
            gaugeBar.style.width = lvl * 30 + 'px';
            currentLevel.innerText = lvl;
        }
        att += 1;
        attempt.innerText = att;
    } 
    }, 50)

const tryLevelUp = () => {
    lvl = 0;
    att = 0;
    work();
}; /* TODO */
