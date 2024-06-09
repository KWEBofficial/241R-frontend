const setRandomBgColor = (click) => {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);

    const color = "rgb(" + R + "," + G + "," + B + ")";
    document.getElementById('color-box').style.backgroundColor = color;

};
