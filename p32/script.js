const getDivisors = (x) => {
    var n = Math.sqrt(x);
    var head = [];
    var tail = [];
    for (var i=1; i<=n; i++) {
        if (i == n) {
            head.push(i)
            break
        }
        if (x%i == 0) {
            head.push(i);
            tail.unshift(x/i);
        }
    };
    console.log(head.concat(tail));
};