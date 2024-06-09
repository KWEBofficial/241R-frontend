const changeBoxColor = () => {
    for (let i = 0; i < 5; i++) {
        document.getElementsByClassName("box")[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
}; /* TODO */
