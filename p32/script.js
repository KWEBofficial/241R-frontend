const getDivisors = (number) => {
    const arr = [];
    let i = 1;
    for (i = 1; i < number; i++){
        if (number % i == 0) {
            arr.push(i);
        }
    }
    arr.push(number);
    return arr;
}; /* TODO */
