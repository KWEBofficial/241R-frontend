/* TODO */
var fruits ={
    apple: 700,
    orange: 800,
    lemon: 900
};

var totalcost=0;
const list=document.getElementsByClassName('item');

for (let fruit of list){
    fruit.querySelector('.add-to-cart').addEventListener('click',()=>{
        totalcost+=fruits[fruit.id];
        document.getElementById('cost').innerText=totalcost;});
}
