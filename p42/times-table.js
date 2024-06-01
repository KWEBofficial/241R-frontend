const displayTimes = () => {
    const numInput = document.getElementById("number")
    let input = numInput.value
    const print = document.getElementById("times-result")
    print.innerText = ""
    let num = parseFloat(input)
    if (Number.isInteger(num) && num<10 && num>0){
        let naturalNum = parseInt(num)
         
        for(i=1;i<10;i++){
            print.innerText+=`${naturalNum} * ${i} = ${naturalNum*i}\n`
        }
    }
    else{
        print.innerText = "Input Error!"
    }


}; /* TODO */
