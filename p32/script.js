const getDivisors = (num) => {
    const arr=[];
    for(let i=1; i<Math.sqrt(num); i++){
        if (num%i==0) {arr.push(i); arr.push(num/i);}
    }
    if(Math.sqrt(num)%1.0 == 0){
        arr.push(Math.sqrt(num));
    }
    arr.sort(function(a, b)  {
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
      });
    return arr;
}; 

const divisor = getDivisors(4);
console.log(divisor);