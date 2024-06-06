const displayTimes = () => {
    const number = document.getElementById('number').value;
    const result = document.getElementById('times-result');

    if (number >= 0 && number <= 9) {
        result.innerText = "";
        for (let k = 1; k <= 9; k++){
            result.innerText += (number + ' * ' + k + ' = ' + number * k + '\n');
        }
    }
    else {
        result.innerText = "Input Error!";
    }


}; /* TODO */
