let cart = 0;

function addToCart(item){

cart++;

document.getElementById("cart").innerText = cart;

alert(item + " added to cart!");

}
