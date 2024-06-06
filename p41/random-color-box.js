const setRandomBgColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    let div = document.getElementById("color-box");
    
    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}; /* TODO */
