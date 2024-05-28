const displayTimes = (click) => {
  let number = Number(document.getElementById('number').value);
  let result = document.getElementById('times-result');
  result.innerText = '';

  if (Number.isInteger(number) && number >= 1 && number <= 9) {
    for (let i = 1; i <= 9; i++) {
      result.innerText += number + ' * ' + i + ' = ' + number * i;
      result.innerText += '\n';
    }
  } else {
    result.innerText += 'Input Error!';
  }
}; /* TODO */
