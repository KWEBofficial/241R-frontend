const setRandomBgColor = () => {
    function randomInt(range) {
        return Math.floor(Math.random() * range);
    }
    document.getElementById('color-box').style.backgroundColor = `rgb(${randomInt(256)},${randomInt(256)},${randomInt(256)})`
}; /* TODO */
