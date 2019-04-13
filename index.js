var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 101);
cart.push(new Object({
  "itemName" : item,
  "itemPrice": price
}));
if(cart === undefined){
  return "Your shopping cart is empty."
  } else {
  return `${item} has been added to your cart.`
  
  }
}



function viewCart(){
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var myString = "In your cart, you have "
    for(var i = 0; i < cart.length - 1; i++) {
      myString = myString + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return myString + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
}

  


function total() {
var  total = 0 
for(var i = 0; i < cart.length; i++){
 total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
delete cart.item

}
return cart

function placeOrder(cardNumber) {
  // write your code here
}
