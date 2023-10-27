function higherOrder(fn) {
fn();
}
higherOrder(function() {
    
console.log("Hello world") 


});