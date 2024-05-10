const leapYears = function(year) {
  /*
  first checks if the given year is divisible by 4 to see if its a leap year. 
  Then checks if year is not divisible by 100 OR its not divisible by 400. 
  First part and at least one of the bracket parts must be true to be 
  a leap year.
  Eg year 200 is divisble by 4 but it is not 0 when divided by 100 so its NOT LY
  Year 800: Div by 4 AND div by 100 as well as div by 400 so it is a LY. 
  */
  return (year % 4 === 0 && (year % 100 != 0 || year % 400 ===0));
  
};

// Do not edit below this line
module.exports = leapYears;
