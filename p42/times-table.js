const displayTimes = () => {
    const v=document.getElementById('number').value;
    const r=document.getElementById('times-result');
    if(1<=v &&v<=9){
        for(let i=1;i<10;i++){
            r.innerText+= v +'*'+ i +'='+ v*i+'\n';
        }  
    }
    else{
        r.innerText+='Input Error!';
        alert('Input Error!');
    }
}; /* TODO */
