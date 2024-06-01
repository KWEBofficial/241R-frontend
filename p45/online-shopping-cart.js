/* TODO */
const itemList = {
    'apple': 700,
    'orange': 800, 
    'lemon': 900
}

let totalCost = 0;
const costPrint = document.getElementById('cost');

const items = document.getElementsByClassName('item')
for (const item of items) {
    item.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')){
            totalCost+=itemList[item.getAttribute('id')];
            costPrint.innerText=totalCost.toString()
        }
    })
}
console.log(items)