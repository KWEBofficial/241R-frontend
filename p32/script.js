const getDivisors = num => {
        const div=[];
        for(let i=1;i<=Math.sqrt(num);++i) 
        {
            if (i*i===num) 
                div.push(i);
            else if 
                (num%i===0) div.push(i,num/i);
        }
        return div.sort((num1, num2) => num1 - num2);
};
