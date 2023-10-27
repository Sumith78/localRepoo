function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}


const sentence = "Hello World";
const reversed = reverseWords(sentence);

console.log(reversed); // Output: "World Hello"
