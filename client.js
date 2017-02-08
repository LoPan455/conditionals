// Conditional Assignment
// Create a function that takes two numbers.
//
// If the first number is bigger than the second number, return "The first number was bigger!". If the second number is bigger than the first number, return "The second number was bigger!". If the numbers are the same, return "The numbers are the same!".
//


function conditionalsTest (num1, num2) { //we take in two numbers

  if (parseFloat(num1) > parseFloat(num2)) { //we compare the numbers, making sure that the function will run with any sort of number or string-containing-a-number is present.
    var message = "The first number is bigger"; //The message we want to return
  } else if (parseFloat(num1) < parseFloat(num2)) {
    var message = "The second number is bigger";
  } else if (parseFloat(num1) == parseFloat(num2)){
    var message = "Both numbers are the same";
  }
  return message; //here we return whatever message was set based on the logic of the comparisons. 
}

console.log(conditionalsTest(1,2));
console.log(conditionalsTest(2,1));
console.log(conditionalsTest(7,7));
console.log(conditionalsTest(5.3, 6.8));
console.log(conditionalsTest(3.6, '8.34 phi'));
