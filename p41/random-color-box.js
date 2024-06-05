const setRandomBgColor = () => {
    const a=Math.floor(Math.random()*257);
    const b=Math.floor(Math.random()*257);
    const c=Math.floor(Math.random()*257);
    document.getElementById("color-box").style.backgroundColor = 'rgb('+a+','+b+','+c+')'; //표현법
}; /* TODO */