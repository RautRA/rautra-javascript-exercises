const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((acc, cur) => acc * cur, 1);
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
  let fact = 1;

  while(num >= 1) {
    fact *= num;
    num--;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
