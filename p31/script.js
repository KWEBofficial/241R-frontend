const isValidNumber = (x) => {
    if(1<=x && x<=9 && Number.isInteger(x)==true){
        return console.log('true');
    }
    else{
        return console.log('false');
    }
};