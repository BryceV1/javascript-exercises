const removeFromArray = function(array, ...args) {
  const myArray = [];
  /*
  Create new array with ...args. For each element
  check to see if it is not included in the args.
  Then push remain elemnts onto array. 
  */
  array.forEach((element) => {
    if (!args.includes(element)){
        myArray.push(element)
    }
  }) 
  return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
