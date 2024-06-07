const displayTimes = () => {
    const number = document.getElementById('number').value;
    const result = document.getElementById('times-result');
    
    if (1<=number && number<=9) {
        result.innerText = ""
        for(let i=1;i<=9;i++) {
            result.innerText += number+"*"+i+"="+(number*i)+"\n";
        }
    }
    else {
        result.innerText = "Input Errro!"
    }
};
