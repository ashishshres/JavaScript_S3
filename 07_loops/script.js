// For Loop
console.log("--For Loop--");
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// While Loop
console.log("\n--While Loop--");
let i = 1;
while (i <= 5) {
  console.log("Count:", i);
  i++;
}

// Do...While Loop
console.log("\n--Do…While Loop--");
let j = 1;
do {
  console.log("Count:", j);
  j++;
} while (j <= 5);

// For...Of Loop
console.log("\n--For…Of Loop--");
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

// For...In
console.log("\n--For…In Loop--");
let student = {
  name: "Ashish",
  age: 20,
  grade: "B+",
};
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

/*
  ?Practice
  Calculate the total price from following prices array:
  [100, 200, 500, 1000, 50]
  Expected Output:
    Total Price: 1850
*/

/*
  ?Practice
  Calculate the total quantity from following products array:
  [
    { name: "Apple", qty: 10 },
    { name: "Banana", qty: 20 },
    { name: "Mango", qty: 30 },
  ];
  Expected Output:
    Total Quantity: 60
*/

// Calculating total price from array
let prices = [100, 200, 500, 1000, 50];
let totalPrice = 0;

for (let i = 0; i < prices.length; i++) {
  totalPrice += prices[i];
}

console.log("Total Price:", totalPrice);

// Calculating total quantity from object
let products = [
  { name: "Apple", qty: 10 },
  { name: "Banana", qty: 20 },
  { name: "Mango", qty: 30 },
];

let totalQuantity = 0;

for (let i = 0; i < products.length; i++) {
  totalQuantity += products[i].qty;
}

console.log("Total Quantity:", totalQuantity);
