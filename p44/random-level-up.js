const possibilities = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];

let lev = 0;
let attemptCount = 0;
const maxLevel = 10;

const getRandomBinaryResult = (num) => {
  return Math.random() * 100 < num;
};

const tryLevelUp = (isInitialCall = false) => {
  if (isInitialCall) {
    lev = 0;
    attemptCount = 0;
  }

  let curLevel = document.getElementById("current-level");
  let curAttempt = document.getElementById("attempts");
  let curGaugeBar = document.getElementById("gauge-bar");

  if (lev < maxLevel) {
    attemptCount++;
    if (getRandomBinaryResult(possibilities[lev])) {
      lev++;
    }
    curAttempt.innerText = `${attemptCount}`;
    curLevel.innerText = `${lev}`;
    curGaugeBar.style.width = `${(lev / maxLevel) * 100}%`;

    setTimeout(() => tryLevelUp(false), 50);
  }
}; /* TODO */
