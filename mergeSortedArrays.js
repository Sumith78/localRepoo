function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  
  // Add remaining elements from arr1 and arr2 (if any)
  result = result.concat(arr1.slice(i)).concat(arr2.slice(j));
  
  return result;
}



const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8, 10];
const mergedArray = mergeSortedArrays(arr1, arr2);

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 10]
