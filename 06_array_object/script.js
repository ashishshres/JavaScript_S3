// Fruit array
let fruits = ["Apple", "Banana", "Mango"];

// 1. Add a fruit at the end (push)
fruits.push("Orange");
console.log("After push:", fruits);

// 2. Remove last fruit (pop)
let removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit);

// 3. Add fruit at the beginning (unshift)
fruits.unshift("Guava");
console.log("After unshift:", fruits);

// 4. Remove first fruit (shift)
let shiftedFruit = fruits.shift();
console.log("Removed first fruit:", shiftedFruit);

// 5. Loop through fruits (forEach)
console.log("Fruits list:");
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// 6. Loop through fruits (for..in)
console.log("Fruits list:");
for (let fruit of fruits) {
  console.log(fruit);
}

// Fruit object
let fruit = {
  name: "Apple",
  color: "Red",
  price: 30,
};

// Access using dot notation
console.log("Name:", fruit.name);
console.log("Color:", fruit.color);
console.log("Price:", fruit.price);

// Access using bracket notation
console.log("Name:", fruit["name"]);
console.log("Color:", fruit["color"]);
console.log("Price:", fruit["price"]);
