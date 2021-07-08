/*
I: str: characters available to create a document
I: str: document that needs to be created from the available characters
O: t/f on whether the doc can be created
C: characters from the chars string can only be used once
*/
const generateDoc = (chars, doc) => {
  console.time("run time");
	if (chars === doc || doc === '') return true;
	
  const sortedChars = chars.split('').sort().join('');
	const sortedDoc = doc.split('').sort().join('');
	let possibleDoc = '';
	
	let charPointer = 0;
	let docPointer = 0;
	
	while (docPointer < sortedDoc.length && charPointer < sortedChars.length) {
		if (sortedDoc[docPointer] === sortedChars[charPointer]) {
			possibleDoc += sortedDoc[docPointer];
			docPointer++;
			charPointer++;
		} else if (sortedDoc[docPointer] < sortedChars[charPointer]) {
			return false;
		} else {
			charPointer++;
		}
	}

	console.timeEnd("run time");
  return sortedDoc.length === possibleDoc.length;
}

// Testing
const chars = "helloworldO ";
const doc = "hello wOrld";

const chars1 = "&*&you^a%^&8766 _=-09     docanCMakemthisdocument";
const doc1 = "Can you make this document &";

console.log(generateDoc(chars, doc));  // expected: true
console.log(generateDoc(chars1, doc1));  // expected: true
