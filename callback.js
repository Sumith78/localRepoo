function doSomethingAsync(callback) {
  setTimeout(function() {
    console.log("Async operation completed");
    callback();
  }, 1000);
}

function callbackFunction() {
  console.log("Callback function executed");
}

doSomethingAsync(callbackFunction);
