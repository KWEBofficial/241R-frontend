const setRandomBgColor = () => {
    // Math.random(): 0 이상 1 미만의 랜덤 실수
    // Math.floor(): 실수를 정수로 내림
    // * 256: 0 이상 255 이하의 정수
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const color = `rgb(${r}, ${g}, ${b})`;

    document.getElementById('color-box').style.backgroundColor = color;
};
