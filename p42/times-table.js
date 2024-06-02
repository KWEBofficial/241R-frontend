const displayTimes = () => {
    const inp = parseInt(document.getElementById('number').value);
    const result = document.getElementById('times-result');

    if(!isNaN(inp) & inp > 0 & inp < 10) {
        let temp = `<h3>Times Table of ${inp}</h3>`;
        for (let i = 1; i <= 9; i++) {
            temp += `<p>${inp} x ${i} = ${inp * i}</p>`;
        }
        result.innerHTML = temp;        
    }
    else result.innerHTML = "Input Error!";
}