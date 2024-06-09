const displayTimes = () => {
    let inputvalue = Number(document.getElementById('number').value);
    let res = document.getElementById('times-result');
    res.innerText = '';
    
    if(1 <= inputvalue && inputvalue <=9 && Number.isInteger(inputvalue)){
        for(let i=1; i<=9; i++){
            res.innerText += inputvalue + ' * ' + i + ' = ' + inputvalue*i + '\n';
        }
    }
    else{
        res.innerText += "Input Error!";
    }
};
