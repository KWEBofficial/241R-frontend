const isValidNumber = (target) => {
    return Number.isInteger(parseFloat(target)) && parseFloat(target)<10 && parseFloat(target)>0;
};

const test = isValidNumber("4.1");
console.log(test)
