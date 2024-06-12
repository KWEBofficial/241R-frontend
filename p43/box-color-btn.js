const changeBoxColor = () => {
    const colorBox = document.getElementsByClassName('box')[1];
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    colorBox.style.backgroundColor = 'rgb('+String(r)+','+String(g)+','+String(b)+')';
};
