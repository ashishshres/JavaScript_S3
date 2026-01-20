// if-else
let age = 18;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

// nested conditionals
let isApple = true;
let isRed = false;
if (isApple) {
  if (isRed) {
    console.log("Fresh");
  } else {
    console.log("Rotten");
  }
}

// switch statement
let day = 2;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day!");
}

/*
    ?Practice
    Write a JavaScript program to create a function named 'CalculateGrade' which accepts 'percentage' and display the appropriate grade based on following.
        Percentage	Grade	
        90–100	    A+	
        80–89	    A	
        70–79	    B+	
        60–69	    B	
        50–59	    C+	
        40–49	    C	
        < 40        Fail
    
    Expected Output: 
        Percentage: 78.8%
        Grade: B+ 
*/
