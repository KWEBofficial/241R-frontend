const getDivisors = (x) => {
    var n = Math.sqrt(x);
    var head = [];
    var tail = [];
    for (var i=1; i<n; i++) {
        if (x%i == 0) {
            head.push(i);
            tail.unshift(x/i);
        }
    };
    console.log(head.concat(tail));
};