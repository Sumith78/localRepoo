function factorial(num){
   let result =1;
   for (let i=1 ;i<= num;++i) {
    result *=i;
    }
    return result;
}
const result =factorial(5);
console.log("result",result);