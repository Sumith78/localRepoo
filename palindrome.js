function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  
  // Iterate until the pointers meet in the middle
  while (left < right) {
    // Compare characters from both ends
    if (str[left] !== str[right]) {
      // If characters don't match, it's not a palindrome
      return false;
    }
    
    // Move the pointers towards the middle
    left++;
    right--;
  }
  
  // If the loop completes, the string is a palindrome
  return true;
}
const result1 = isPalindrome("racecar"); // true
const result2 = isPalindrome("hello");   // false

console.log(result1); // Output: true
console.log(result2); // Output: false
