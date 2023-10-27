function findLargestNumber(arr){
    let largest=arr[0];
    for(let i=1;i<arr.length;i++){ //smallest ke liye i>arr.length
        if(arr[i]>largest){
            largest=arr[i]
        }
        
    }
    return largest;
}

const numbers = [12, 45, 67, 89, 34, 56, 23];
const largestNumber = findLargestNumber(numbers);

console.log(largestNumber); // Output: 89
