const isValidNumber = (input) => {

    // 입력값을 숫자로 변환. 변환이 불가능한 경우에는 NaN을 반환.
    let num = Number(input);

    // 1. NaN이 아닌지 확인; 2. 정수인지 확인; 3. 1이상 9이하인지 확인
    if (!isNaN(num) && Number.isInteger(num) && num >= 1 && num <= 9) {
        return true;
    }
    return false;
}; 


// console.log(isValidNumber(9));     // true
// console.log(isValidNumber('4'));   // true
// console.log(isValidNumber('abc')); // false
// console.log(isValidNumber(-5));    // false
// console.log(isValidNumber(3.5));   // false
// console.log(isValidNumber(3 / 0)); // false

