const isValidNumber = (target) => {
    return Number.isInteger(parseFloat(target)) && parseFloat(target)<10 && parseFloat(target)>0;
}; /* TODO */

const test = isValidNumber("-4");
console.log(test)