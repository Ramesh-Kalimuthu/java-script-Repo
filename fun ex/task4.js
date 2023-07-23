function evalNumbers(num1, num2, operation) {
  var num1=parseInt(prompt('enter num1: '))
  var num2=parseInt(prompt('enter num2: '))
  var operation=prompt('enter operation: ')
  
if (operation === "add") {
  console.log(num1 + num2);
} else if (operation === "subtract") {
  console.log(num1 - num2);
} else if (operation === "multiply") {
  console.log(num1 * num2);
} else if (operation === "divide") {
  console.log(num1 / num2);
} else if (operation === "modulus") {
  console.log(num1 % num2);
} else {
  console.log("Invalid operation");
}
}
evalNumbers()
