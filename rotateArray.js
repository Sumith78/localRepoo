

function rotateArray(arr, steps) {
  const rotated = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    rotated[(i + steps) % len] = arr[i];
  }
  return rotated;
}


const arr = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(arr, 2);

console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]


