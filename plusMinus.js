const plusMinus = (num) => {
  // split num into digits, then back into separated integers
  const digitArr = num.toString()
                    .split('')
                    .map(n => parseInt(n));
  const options = [];

  // helper function to find options
  const traverse = ([current, ...otherNums], combination, sum) => {
    if (otherNums.length === 0){
      if (sum + current === 0) options.push(combination + '+');
      if (sum - current === 0) options.push(combination + '-');
    } else {
      traverse(otherNums, combination + '+', sum + current);
      traverse(otherNums, combination + '-', sum - current);
    }
  };

  // in case of multiple valid options, return the one with the most minus signs.
  const mostMinuses = (array) => {
    return array.reduce((acc, curr) => {
      return [...acc].filter(char => char === '-').length > 
      [...curr].filter(char => char === '-').length ? 
      acc : curr;
    })
  }

  traverse(digitArr, '', 0);
  return options.length ? mostMinuses(options) : "not possible";
}

console.log(plusMinus(1113))
console.log(plusMinus(3111))
console.log(plusMinus(3569283))
console.log(plusMinus(1))
console.log(plusMinus(11))
console.log(plusMinus(356928377))