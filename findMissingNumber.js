function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}


const numbers = [1, 2, 3, 5, 6, 7, 8, 9, 10];
const missingNumber = findMissingNumber(numbers);

console.log(missingNumber); // Output: 4
