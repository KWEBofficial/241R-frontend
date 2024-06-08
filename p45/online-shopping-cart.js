document.addEventListener('DOMContentLoaded',()=>{
    const fruit={
        apple:700,
        orange:800,
        lemon:900,
    };
    let cost=0;
    const cart=(x)=>{
        cost+=fruit[x];
        document.getElementById('cost').textContent=cost;
    };
    const buttons=document.querySelectorAll('.add-to-cart');
    for(const button of buttons){
        button.addEventListener('click',(x)=>{cart(x.target.parentElement.parentElement.id);});
    }
});