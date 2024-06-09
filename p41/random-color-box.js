const setRandomBgColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';

    document.getElementById('color-box').style.backgroundColor = rgb;
}
