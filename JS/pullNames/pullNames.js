/*
I: a string of names separated by a space
C: full names (first and last) are enclosed in double
   quotes and should be returned as one name in output array
O: an array of firt names and full names with no punctuation attached  
*/

const pullNames = (str) => {
  const names = [];
  let currentName = '';
  let fullName = '';
  let idx = 0;

  while (idx < str.length) {
    if (str[idx] === ` ` && currentName.length > 0) {
      names.push(currentName);
      currentName = '';
      idx++;
    } else if (str[idx] === ` `) {
      idx++;
    } else {
      currentName += str[idx];
      idx++;
    }
    
    // gather full names in quotes
    if (str[idx] === `"`) {
      idx++;
      while (str[idx] !== `"`) {
        fullName += str[idx];
        idx++;
      }
      names.push(fullName);
      fullName = '';
      idx++;
    }
  }
  // push final name after while loop discontinues if there is one
  if (currentName.length > 0) names.push(currentName);
  return names;
}

// Testing
const nameStr = `Bill Ed Johnny "George Allen" Hank Steven`;
console.log(pullNames(nameStr));
