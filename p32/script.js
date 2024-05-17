const getDivisors = (n) => {
    let arr =  [];
    let max = Math.sqrt(n);
    for(let i=1; i<=max; i++) {
        if (n%i == 0) {
            arr.push(i);
            if (!(n/i === i))arr.push(n/i);
        }
    }
    arr.sort((first, second) => first-second);
    return arr;
};
