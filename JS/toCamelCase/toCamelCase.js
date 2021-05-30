const toCamelCase = (str) => {
  const strArray = str.split(/-|_/);
  let camelVersion = strArray[0];
  
  for (let i = 1; i < strArray.length; i++) {
    let currentWord = strArray[i];
    let capitalizedWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
    camelVersion += capitalizedWord;
  }
  
  return camelVersion;
}

// TESTING
const str1 = '';
const str2 = "the_stealth_warrior";
const str3 = "The-stealth-warrior";
const str4 = "A-B-C";

console.log(toCamelCase(str1));
console.log(toCamelCase(str2));
console.log(toCamelCase(str3));
console.log(toCamelCase(str4));
