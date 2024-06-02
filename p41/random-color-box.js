const setRandomBgColor = () => {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.getElementById('color-box').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}