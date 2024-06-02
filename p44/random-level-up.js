// 성공 확률 배열 (% 단위로 지정)
const percentage = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];
let level = 0;
let num = 0;

// 확률 값을 받고 성공 여부 반환
const getRandomBinaryResult = (inp) => {
    if(Math.random() * 100 < inp) return true;
    else return false;
}

const tryLevelUp = () => {
    const leveluploopId = setInterval(() => {
        if (level < 10) {
            num++;
            if (getRandomBinaryResult(percentage[level])) {
                level++;
            }
            document.getElementById('current-level').innerText = level;
            document.getElementById('attempts').innerText = num;
            document.getElementById('gauge-bar').style.width = 30*(level) + 'px';
        } else clearInterval(leveluploopId);    
    }, 50); // 50 밀리초마다 콜백 함수 실행
}