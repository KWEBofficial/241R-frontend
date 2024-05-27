const getDivisors = (x) => {
    const returnlst = [];
    const root = Math.floor(Math.sqrt(x));
    for(let i = 1; i <= root ; i++){
        if(x % i == 0){
            returnlst.push(i);
            if(i**2 !== x){
                returnlst.push(x / i)
            }   
        }
    }
    return returnlst.sort((a, b) => a-b);
}; /* TODO */
