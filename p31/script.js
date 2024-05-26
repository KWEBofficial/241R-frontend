const isValidNumber = (num) => {
    if ( num % 1 === 0 && 1<= num && num <= 9) {
        return console.log('true');
    } else {
        return console.log('false');
    }
};