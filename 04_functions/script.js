// Traditional functions
function MakeCoffee() {
  console.log("1. Boil water");
  console.log("2. Add coffee");
  console.log("3. Add sugar");
}

MakeCoffee();

// Arrow functions
const MakeChai = () => {
  console.log("1. Boil milk");
  console.log("2. Add water");
  console.log("3. Add sugar");
};

MakeChai();

// Function with parameters
function ChaiMakerV1(type) {
  console.log(`${type} chai is ready.`);
}

ChaiMakerV1("Milk");

// Function with default parameters
function ChaiMakerV2(type = "Milk") {
  console.log(`${type} chai is ready.`);
}

ChaiMakerV2();

// Function with return
function CalculateTotal(price, quantity) {
  let totalPrice = price * quantity;
  return totalPrice;
}

let price = 10;
let quantity = 2;
let totalPrice = CalculateTotal(price, quantity);
console.log(`Total price for ${quantity} qty = Rs.${totalPrice}`);

/*
    ?Practice
    Create a function named 'CalculateWithDiscount' which accepts three parameters, 'price', 'qty' and 'discount'.
    Keep the default discount as 10%.
    Expected Output: 
        Total price for 2 qty = Rs.120 with discount. 
*/
