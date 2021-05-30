const repeatedString = (s, n) => {
  const numTimesToRepeatStr = Math.floor(n / s.length);
  const lengthOfLeftoverStr = n % s.length;
  let aInOneInstance = aInLeftoverStr = 0;
    
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      aInOneInstance++;
      if (i < lengthOfLeftoverStr) aInLeftoverStr++;
    }
  }

  return (aInOneInstance * numTimesToRepeatStr) + aInLeftoverStr;
}

// Testing
const s = 'ojowrdcpavatfacuunxycyrmpbkvaxyrsgquwehhurnicgicmrpmgegftjszgvsgqavcrvdtsxlkxjpqtlnkjuyraknwxmnthfpt';
const n = 685118368975;

console.log(repeatedString(s, n)); // 41107102139
