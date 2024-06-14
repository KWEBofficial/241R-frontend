/* TODO */
const prices = {apple: 700, orange: 800, lemon: 900}
var total = 0;

for (const button of document.getElementsByClassName('add-to-cart')) {
    button.addEventListener('click', event => {
        total += prices[event.target.parentElement.parentElement.id];
        document.getElementById('cost').innerText = total;
    })
}