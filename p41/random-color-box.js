const setRandomBgColor = () => {
    const getRandomNumber = () => Math.floor(Math.random() * 256)
    
    const newR = getRandomNumber()
    const newG = getRandomNumber()
    const newB = getRandomNumber()

    const newColor = `rgb(${newR}, ${newG}, ${newB})`
    document.getElementById('color-box').style.backgroundColor = newColor
};
