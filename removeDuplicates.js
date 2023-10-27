function removeDuplicates(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}


const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];
const uniqueNumbers = removeDuplicates(numbers);

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
