const item = {
    apple: 700,
    orange: 800,
    lemon: 900
}

let totalCost = 0;

const cost = document.getElementById('cost');
const click = document.querySelectorAll('.add-to-cart');

for (const button of click) {
    button.addEventListener('click', (event) => {
        totalCost += item[event.target.closest('.item').id];
        cost.innerText = totalCost;
    })
}