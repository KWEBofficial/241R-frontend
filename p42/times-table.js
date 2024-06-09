const displayTimes = (click) => {
    const num = document.getElementById('number').value;
    const result = document.getElementById('times-result');

    

    if (1<= num && num <= 9) {
        result.innerHTML = '';
        for(let i = 1; i <= 9; i++) {
            result.innerHTML += num + " * " + i + " = " + num*i + "<br/>";
        }
    } else {
        result.innerText = "Input Error!"
    }


};
