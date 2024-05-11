const fibonacci = function(countArg) {
  // convert a string into a int, else its arleady an int
    let count
    if (typeof countArg !== 'number') {
        count = parseInt(countArg)
    } else {
        count = countArg
    }
// initial checks to make sure its no negative or 0.
    if (count < 0) return "OOPS";
    if (count == 0) return 0;

// iterates through our fib array
//uses the count to output the number it ends at
 const fib = [0, 1];
 for (let i = 2; i <= count; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
 }
 return fib[count];
};

// Do not edit below this line
module.exports = fibonacci;
