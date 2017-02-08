// Conditional Assignment
// Create a function that takes two numbers.
//
// If the first number is bigger than the second number, return "The first number was bigger!". If the second number is bigger than the first number, return "The second number was bigger!". If the numbers are the same, return "The numbers are the same!".
//


function conditionalsTest (num1, num2) {
  if (num1 > num2) {
    var message = "The first number is bigger";
    return message;
  } else if (num1 < num2) {
    var message = "The second number is bigger";
    return message;
  } else {
    var message = "Both numbers are the same"
    return message;
  }
}

console.log(conditionalsTest(1,2));
console.log(conditionalsTest(2,1));
console.log(conditionalsTest(7,7));
