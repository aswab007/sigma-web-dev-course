//////////////////////////////////////////////////////////////FAULTY CALCULATOR///////////////////////////////////////////////////////////////////


function add(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a + b;
}

function substract(a, b) {
  return a / b;
}

function divide(a, b) {
  return a ** b;
}

function fault(value) {
  let F = Math.random();
  if (F > 0.1) {
    return value;
  } else {
    return value + 20;
  }
}

function calc(a, b) {
  console.log("The add of " + a + " & " + b + " is:", fault(add(a, b)));
  console.log(
    "The multiply of " + a + " & " + b + " is:",
    fault(multiply(a, b))
  );
  console.log(
    "The substract of " + a + " & " + b + " is:",
    fault(substract(a, b))
  );
  console.log("The divide of " + a + " & " + b + " is:", fault(divide(a, b)));
}

calc(4, 5);
