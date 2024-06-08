const displayTimes = () => {
    let t=document.getElementById('number').value;
    //t=parseInt(t,10);
    if(t%1===0&&t>=1&&t<=9){
        document.getElementById('times-result').innerHTML=
        `${t} * 1 = ${t*1}<br>` +
        `${t} * 2 = ${t*2}<br>` +
        `${t} * 3 = ${t*3}<br>` +
        `${t} * 4 = ${t*4}<br>` +
        `${t} * 5 = ${t*5}<br>` +
        `${t} * 6 = ${t*6}<br>` +
        `${t} * 7 = ${t*7}<br>` +
        `${t} * 8 = ${t*8}<br>` +
        `${t} * 9 = ${t*9}<br>`;
    }
    else document.getElementById('times-result').innerHTML="Input Error!";
};