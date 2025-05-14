// function sum(a, b) {
//   let result =a + b;
//   return result;        
// }

// function displayResult(result){
//   console.log("The result is " + result);
// }

// console.log(displayResult(sum(10, 20)));

// function sum(a, b) {
//   let result =a + b;
//   return result;        
// }
//EXAMPLE OF CALL BACK FUNCTION
function displayResult(result){
  console.log("The result is " + result);
}

// console.log(displayResult(sum(10, 20)));

function sum(a, b, fnToCall) {
    let result =a + b;
    fnToCall(result);
  }
  const ans = sum(1, 2, displayResult)

  /////////////////
  function greetAlien(){
    console.log("Hello Alien");     
  } 
  setTimeout(greetAlien, 2000);
  setInterval(greetAlien, 2000);