const getDivisors = (inp) => {
    let ret = [];
    for(let i=1; i<=Math.sqrt(inp); i++) {
        if(inp%i === 0) {
            ret.push(i);
            if(i != inp/i) ret.push(inp/i);
        }
    }
    return ret.sort((a,b)=>a-b);
};
