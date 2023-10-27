function findSecondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
  
  return secondLargest;
}


const numbers = [12, 45, 67, 89, 34, 56, 23];
const secondLargestNumber = findSecondLargest(numbers);

console.log(secondLargestNumber); // Output: 67
