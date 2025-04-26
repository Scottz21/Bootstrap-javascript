// greet users
function greetUser(name) {
    alert(`Hello there! ${name}`);
}

greetUser("Scott")



// adds up total price of the items purchased
const prices = [50.00, 30.00, 40.00];

function getTotalPrice() {
  return prices.reduce((total, price) => total + price, 0);
}
console.log(`Total price: $${getTotalPrice()}`);




// Stores feedback from comment section on about us page
let feedback = [];

function addComment(message) {
  comment.push(message);
  return feedback;
}
console.log(addComment("Awesome experience!"));



// Apply 20% discount from ticket price
function applyDiscount(ticketPrice) {
  const discountRate = 0.20;
  const discountAmount = ticketPrice * discountRate;
  const finalPrice = ticketPrice - discountAmount;
  return finalPrice;
}
