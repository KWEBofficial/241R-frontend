const setRandomBgColor = () => {
    const getRandomInt = () => Math.floor(Math.random() * 256);

    const color = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;

    document.getElementById('color-box').style.backgroundColor = color;
};