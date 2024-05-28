const tryLevelUp = (click) => {
  let prob = [1, 0.6, 0.36, 0.22, 0.13, 0.08, 0.05, 0.03, 0.02, 0.01];

  let level = parseInt(document.getElementById('current-level').textContent);
  let attempt = parseInt(document.getElementById('attempts').textContent);

  function getRandomBinaryResult(p) {
    return Math.random() < p;
  }

  const levelUp = setInterval(() => {
    attempt++;
    let success = getRandomBinaryResult(prob[level]);

    if (success) level++;

    document.getElementById('current-level').textContent = level;
    document.getElementById('attempts').textContent = attempt;
    let gauge = document.getElementById('gauge-bar');
    gauge.style.width = (level / 10) * 100 + '%';

    if (level == 10) clearInterval(levelUp);
  }, 50);
};
