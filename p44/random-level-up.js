const probability = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];
var level = 0;
var attempts = 0;

const getRandomBinaryResult = (prob) => {
    const randNum = Math.floor(Math.random() * 101) + 1;
    if (randNum <= prob) return true;
    else return false;
}

const tryLevelUp = () => {
    function levelUp() {
        if (getRandomBinaryResult(probability[level]) === true){
            level += 1;
            document.getElementById("current-level").innerText = level;
            document.getElementById("gauge-bar").style.width = (level * 30 + 'px');
        }
        attempts += 1;
        document.getElementById('attempts').innerText = attempts;

        if (level === 10) clearInterval(interValid);
    }

    var interValid = setInterval(levelUp, 50);
}; /* TODO */
