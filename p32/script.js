const getDivisors = (x) => {
    let d=[];
    for(let i=1;i<=Math.sqrt(x);++i)
        {
            if(i*i==x)
            {
                d.push(i);
                break;
            }
            if(x%i==0)d.push(i,x/i);
        }
        return d.sort((a,b)=>a-b);
};