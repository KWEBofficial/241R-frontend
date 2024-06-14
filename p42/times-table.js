const displayTimes = () => {
    const value = document.getElementById('number').value;
    const div = document.getElementById('times-result');

    if (value % 1 != 0 || value < 1 || value > 9) return div.innerText = 'Input Error!';

    div.innerText = '';
    for (var i = 1; i < 10; i++) div.innerText += `${value} * ${i} = ${value * i}\n`;

    return;
};
