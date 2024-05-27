const getDivisors = (input) => {
    let divs = []

    for (let i = 1; i <= Math.sqrt(input); i++){
        if (input % i === 0) {
            divs.push(i);
            if (input / i !== i) {
                divs.push(input / i);
            }
        }
    }

    divs.sort((a, b) => a - b);

    return divs;
}; /* TODO */
