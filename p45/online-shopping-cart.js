const price = {
  apple: 700,
  orange: 800,
  lemon: 900,
};
let total = 0;

const items = document.querySelectorAll('.item');

for (const item of items) {
  const button = item.querySelector('.add-to-cart');
  button.addEventListener('click', () => {
    total += price[item.id];

    document.getElementById('cost').textContent = total;
  });
}
