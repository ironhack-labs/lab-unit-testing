function sum(a, b) {
  if (!a && !b) {
    return 0;
  }
  else if(!a)
  {
    return b
  }
  else if (!b){
    return a
  }
  else{
    let result = a + b;
    return result
  }
}

function subtract(a, b) {

  if (!a && !b) {
    return 0;
  }
  else if(!a)
  {
    return b
  }
  else if (!b){
    return a
  }
  else{
    let result = a - b;
    return result
  }
}

function divide(a, b) {

  if (a===0 || b===0)
  {
    throw "Error";
  }

  else{
    let result = a / b;
    return result
  }

  const result = a-b
  return result;
}

function multiply(a, b) {
  const result = a*b
  return result;
}




// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };


