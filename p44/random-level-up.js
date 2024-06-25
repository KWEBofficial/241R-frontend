function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const tryLevelUp = () => {

    let level = 0;
    let attempts = 0;
    const work = () => {

        let levelText = document.querySelector("#current-level");
        let attemptsText = document.querySelector("#attempts");
        let bar = document.querySelector("#gauge-bar");
        let probs = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];
        attempts++;
        function getRandomBinaryResult(prob) {
            if (getRandomInt(100) + 1 <= prob) { //1-100
                return true;
            }
            else {
                return false;
            }
        }
        if (getRandomBinaryResult(probs[level])) {
            level++;
        }
        levelText.innerText = level;
        attemptsText.innerText = attempts;
        bar.style.width = 30 * (level + 1) + "px";

        if (level == 9)
            clearInterval(id);
    }
    let id = setInterval(work, 50);
};
