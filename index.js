1 + 80; //=> 81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5; //=> 2
function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
let number = 5
number += 3;
number -= 2;
number *= 10;
number /= 5;

number=10;
function add5() {
    return (number += 5);
  }
  
  function divideBy3() {
    return (number /= 3);
  }
  
  divideBy3(); 
  
  add5();
  
  number = 10;
  
  add5(); 
  
  divideBy3(); 

function increment(n){
    return n+1;
}
function decrement(n){
    return n-1;
}
parseInt("2.2222", 10);
parseInt("nonsense!", 10);

function makeInt(a){
    return parseInt(a, 10);
}
function preserveDecimal(a){
    return parseFloat(a);
}