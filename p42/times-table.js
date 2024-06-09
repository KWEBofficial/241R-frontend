const displayTimes = () => {
    const validNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const inputNum = parseInt(document.getElementById('number').value);
    const timesResult = document.getElementById('times-result');
    if (validNum.includes(inputNum)) {
        let timesTable = '';
        for (let i = 1; i <= 9; i++) {
            timesTable += `${inputNum} x ${i} = ${inputNum*i}\n`;
        }
        timesResult.innerText = timesTable;
    }
    else {
        timesResult.innerText = 'Input Error!'
    }
};
