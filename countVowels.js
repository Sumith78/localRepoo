function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}


const sentence = "Hello World";
const vowelCount = countVowels(sentence);

console.log(vowelCount); // Output: 3
