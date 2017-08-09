function fibonacci (n) {
  if (n == 1) {
    return 0;
  }
  else if (n == 2) {
    return 1;
  }
  else if (n >= 3) {
    let firstNumber = 0;
    let secondNumber = 1;
    let thirdNumber = 0;
    for (let i = 3; i <= n; i++) {
      thirdNumber = firstNumber + secondNumber;
      firstNumber = secondNumber;
      secondNumber = thirdNumber;
    }
    return thirdNumber;
  } 
}

console.log(fibonacci (6));
console.log(fibonacci (7));
console.log(fibonacci (8));
console.log(fibonacci (9));
console.log(fibonacci (10));