// 성공 확률 배열 (% 단위로 지정)
const levelUpProbabilities = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];

// 변수 선언
let currentLevel = 0;
let attempts = 0;
const maxLevel = 10;

// 확률 값을 받고 성공 여부 반환
const getRandomBinaryResult = (percentage) => {
    return Math.random() * 100 < percentage; // 작으면 성공
};

const updateUI = () => {
    document.getElementById('current-level').innerText = currentLevel;
    document.getElementById('attempts').innerText = attempts;
    const gaugeBar = document.getElementById('gauge-bar');
    gaugeBar.style.width = (currentLevel / maxLevel) * 100 + '%';
};

const tryLevelUp = () => {
    const intervalId = setInterval(() => {
        if (currentLevel < maxLevel) { // 현재 레벨이 10보다 작은 경우에만 레벨업 시도
            attempts++; // 시도 1 증가
            const success = getRandomBinaryResult(levelUpProbabilities[currentLevel]); // 성공 여부
            if (success) {
                currentLevel++; // 성공하면 현재 레벨 + 1
            }
            updateUI(); // UI 업데이트 (레벨, 시도 횟수, 게이지 바)
        } else {
            clearInterval(interval); // 10에 도달하면 멈춤
        }
    }, 50); // 50 밀리초마다 콜백 함수 실행
};

