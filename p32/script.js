const getDivisors = (num) => {
    const arr=[];
    for(let i=1; i<=num; i++){
        if (num%i==0) arr.push(i); 
    }
    return arr;
}; /* TODO */

const divisor = getDivisors(10);
console.log(divisor);
