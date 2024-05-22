const getDivisors = (x) => {
    const resultArr = [];
    for(let i=1;i<=x;i++){
        if(x%i===0){
           resultArr.push(i)
        }
    }
    return resultArr
};