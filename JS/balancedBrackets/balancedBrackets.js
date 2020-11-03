/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 */

 // Input: a string that may or may not have parens, brackets and/or curly brackets
 // Output: Boolean of whether parens are balanced or not

 const balancedParens = (input) => {
  // save only opening brackets/parens to be pulled off
  // the stack if we come across their closing pair
  let stack = [];
  let pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  // iterate over the input string
  for (let char of input) {
    // if char used as a key for the pairs obj registers as truthy,
    // it means it's an open bracket/paren, so add it to the stack
    if (pairs[char]) {
      stack.push(char);
    // if char is a closing bracket
    } else if (char === ')' || char === '}' || char === ']') {
      
      if (stack.length === 0) return false;
      // last open bracket/paren on the stack
      let lastOpenPair = stack.pop();
      // return false if the closing pair doesn't
      // match the last open brack/paren
      if (pairs[lastOpenPair] !== char) {
        return false;
      }
    } 
  } 
  // if any brackets remain, return false
  return stack.length === 0;
};

//console.log(balancedParens('[](){}')); //true
//console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); //true
//console.log(balancedParens(' var hubble = function() {} telescopes.awesome();')); //false
