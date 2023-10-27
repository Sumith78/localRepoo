function isPangram(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerCaseSentence = sentence.toLowerCase();
  for (const char of alphabet) {
    if (!lowerCaseSentence.includes(char)) {
      return false;
    }
  }
  return true;
}



const sentence1 = "The quick brown fox jumps over the lazy dog";
const sentence2 = "Hello World";

const isPangram1 = isPangram(sentence1);
const isPangram2 = isPangram(sentence2);

console.log(isPangram1); // Output: true
console.log(isPangram2); // Output: false
