const sumAll = function ( num1, num2) {
  // Error if not num , as well as if num1/2 are negative
  // swap num1 with num2 if the num1 is larger 
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (num1 > num2) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }
  // iterate through num1 using num2 as the the last value
  //add each number to our finalSum variable
  let finalSum = 0;
  for (let i = num1; i <= num2; i++) {
    finalSum += i;
  }
  return finalSum;
};

module.exports = sumAll;