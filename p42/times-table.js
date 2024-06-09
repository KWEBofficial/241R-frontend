const displayTimes = () => {
  let inputNum = document.getElementById("number").value;
  let result = document.getElementById("times-result");

  result.innerText = "";
  if (inputNum > 0 && inputNum < 10 && inputNum % 1 == 0) {
    let i = 1;
    for (i = 1; i < 10; i++) {
      result.innerText += `${inputNum} X ${i} = ${inputNum * i}\n`;
    }
  } else {
    result.innerText = "Input Error!";
  }
}; /* TODO */
