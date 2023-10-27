function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = '';
  
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  
  return longest;
}



const sentence = "The quick brown fox jumped over the lazy dog";
const longest = longestWord(sentence);

console.log(longest); // Output: "jumped"
