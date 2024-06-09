const getDivisors = (num) => {
    let arr = [];

    for(let i=1; i<=sqrt.max(num); i++) {
        if(num%i === 0){
            arr.push(i);
            if(num/i!== i){
                arr.push(i);
            }    
        }
    }

    arr.sort((first, second) => first-second);
    return arr;
};
