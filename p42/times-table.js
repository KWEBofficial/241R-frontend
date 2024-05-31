function isValidNumber (inp) {
    inp=Number(inp)
    if(inp>=1&&inp<=9&&Number.isInteger(inp))
        return true;
    else
        return false;
};
const displayTimes = () => {
    
    let number=document.querySelector("input").value;
    if(isValidNumber(number)){
        let out=document.querySelector("#times-result");
        let res="";
        for(let i=1;i<=9;i++){
            res=res+number+" * "+i+" = "+ number*i+"\n";
        }
        out.innerText=res
    }
    else{
        let out=document.querySelector("#times-result");
        out.innerText="Input Error!"
    }
};
