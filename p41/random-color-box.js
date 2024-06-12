const setRandomBgColor = () => {
    const colorBox = document.getElementById('color-box');
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    colorBox.style.backgroundColor = 'rgb('+String(r)+','+String(g)+','+String(b)+')';
};