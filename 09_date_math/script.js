/*
    Math Object
*/

// a) Math.round() – round to nearest integer
let num = 4.6;
console.log("Math.round(4.6):", Math.round(num)); // 5

// b) Math.floor() – round down
console.log("Math.floor(4.6):", Math.floor(num)); // 4

// c) Math.ceil() – round up
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // 5

// d) Math.max() – find maximum
console.log("Math.max(10, 20, 5):", Math.max(10, 20, 5)); // 20

// e) Math.min() – find minimum
console.log("Math.min(10, 20, 5):", Math.min(10, 20, 5)); // 5

// f) Math.random() – random number between 0 and 1
console.log("Random number:", Math.random());

// g) Math.abs() – absolute value
console.log("Math.abs(-15):", Math.abs(-15));

/*
    Date Object
*/

// Create a date object
let today = new Date();
console.log("Current Date:", today);

// a) Get full year
console.log("Year:", today.getFullYear());

// b) Get month (0-11, so add 1 for normal month)
console.log("Month:", today.getMonth() + 1);

// c) Get day of month
console.log("Date:", today.getDate());

// d) Get day of week (0-Sunday, 6-Saturday)
console.log("Day of Week:", today.getDay());

// e) Get hours, minutes, seconds
console.log("Hours:", today.getHours());
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());

// f. Locale-based date (US)
console.log("US date:", today.toLocaleDateString("en-US"));

// g. Locale-based time only (US)
console.log("US time:", today.toLocaleTimeString("en-US"));
