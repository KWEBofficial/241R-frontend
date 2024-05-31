const item = {
    apple:700,
    orange:800,
    lemon:900,
};
const buttons=document.querySelectorAll("#items > .item > .item-info > .add-to-cart");
let totalCost=document.querySelector("#cost");
function handleClick(element)
{
    let id=element.parentElement.parentElement.id;
    totalCost.innerText=(parseInt(totalCost.innerText)+item[id]).toString();
}
for ( const element of buttons){
    element.addEventListener("click",()=>{handleClick(element)});
}

