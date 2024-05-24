const getDivisors = (inp) => {
    let res=[];
    for(let i=1;i<=Math.sqrt(inp);i++){
        if(inp%i==0){
            res.push(i);
            res.push(inp/i)
        }
    }      
    res.sort((a, b)=> {return a - b;});
    res=new Set(res);
    res=Array.from(res);
    return res;
};