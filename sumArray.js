function sumArray(arr){
    let sum=0;

    for(let i=0; i<arr.length; i++){
        sum +=arr[i];

    }
    return sum;
  
    
}


const numbers=[1,5,6,7,8,9];
console.log('sum of array is :', sumArray(numbers));



