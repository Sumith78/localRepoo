function findCommonElements(arr1, arr2) {
  const common = [];
  for (const element of arr1) {
    if (arr2.includes(element)) {
      common.push(element);
    }
  }
  return common;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(array1, array2);

console.log(commonElements); // Output: [3, 4, 5]
