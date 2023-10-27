function areAnagrams(str1, str2) {
  const cleanStr = str => str.replace(/[^\w]/g, '').toLowerCase();
  return cleanStr(str1).split('').sort().join('') === cleanStr(str2).split('').sort().join('');
}



const result1 = areAnagrams("listen", "silent"); // true
const result2 = areAnagrams("hello", "world");   // false

console.log(result1); // Output: true
console.log(result2); // Output: false
