function removeDuplicatesSorted(arr) {
  const result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}


const sortedArray = [1, 2, 2, 3, 3, 4, 5, 5, 5];
const uniqueArray = removeDuplicatesSorted(sortedArray);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
