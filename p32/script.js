const getDivisors = (num) => {
    let divisors = [];

    // 1부터 num의 제곱근까지 반복
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num %i === 0) {
            divisors.push(i);
            if (i !== num / i) {
                divisors.push(num / i); // 중복을 피하기 위함
            }
        }
    }

    return divisors.sort((a, b) => a - b);
}; 

// console.log(getDivisors(5));    // [1, 5]
// console.log(getDivisors(24));   // [1, 2, 3, 4, 6, 8, 12, 24]
// console.log(getDivisors(196));  // [1, 2, 4, 7, 14, 28, 49, 98, 196]
