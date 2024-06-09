const items = {
    apple: 700,
    orange: 800,
    lemon: 900, 
};

let total = 0;

const addtocart = document.querySelectorAll('.item');

for(const fruit of addtocart) {
    const button = fruit.querySelector('.add-to-cart');
    button.addEventListener('click', () => {
        total += items[fruit.id];

        document.getElementById('cost').innerText = total;
    });
}