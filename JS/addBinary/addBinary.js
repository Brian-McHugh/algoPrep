// Given two binary strings a and b, 
// return their sum as a binary string.

const addBinary = (a, b) => {
  let aIdx = a.length - 1;
  let bIdx = b.length - 1;
  let carry = 0;
  let result = '';
      
  while (aIdx >= 0 || bIdx >= 0) {
    let total = carry;
      
    if (aIdx >= 0) {
      total += parseInt(a[aIdx]);
      aIdx--;
    }
      
    if (bIdx >= 0) {   
      total += parseInt(b[bIdx]);
      bIdx--;
    }
      
    result = String(total % 2) + result;
    total >= 2 ? carry = 1 : carry = 0;
  }
  
  if (carry === 1) result = '1' + result;
  return result;
};


// Testing
const a = "1010";
const b = "1011";
console.log(addBinary(a, b)); // "10101"
