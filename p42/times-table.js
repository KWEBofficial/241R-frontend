const displayTimes = () => {
    const multTableBox = document.getElementById('times-result');
    const num = Number(document.getElementById('number').value);
    const integerList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (!integerList.includes(num)) {
        multTableBox.innerText = "Input Error!";

    }
    else {
        let output = "";
        for (let i = 1; i <= 9; i++) {
            output += `${num} x ${i} = ${num * i}\n`;
        }
        multTableBox.innerText = output;
    }
};