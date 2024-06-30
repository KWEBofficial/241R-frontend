const displayTimes = () => {
    const inputValue = document.getElementById('number').value;
    const resultElement = document.getElementById('times-result');

    const number = parseInt(inputValue);

    if (number >= 1 && number <= 9) {
        let result = '';
        for (let i = 1; i <= 9; i++) {
            result += `${number} x ${i} = ${number * i}<br>`;
        }
        resultElement.innerHTML = result;
    } else {
        resultElement.innerHTML = 'Input Error!';
    }
};