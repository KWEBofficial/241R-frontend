const getDivisors = (n) => {
    let arr = [];
    for(let i = 1; i<= Math.sqrt(n); i++){
        if(n%i === 0){
            arr.push(i);
            if(i !== n/i) arr.push(n/i);
        }
    }
    return arr.sort((a,b) => a - b);
}; 
