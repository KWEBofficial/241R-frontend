const displayTimes = () => {
    const n = parseFloat(document.getElementById('number').value);
    const re = document.getElementById('times-result');
    if (n % 1 === 0 && 0 < n && n < 10 && typeof(n) == 'number') {
        re.innerHTML = '<ul>'
        for (var i = 1;i<10;i++) {
            re.innerHTML +=  '<li>' + n + ' * ' + i + ' = ' + n*i + '</li>';
        }
        re.innerHTML += '</ul>'
    }
    else {
        re.innerHTML = 'Input Error!'
    }
};