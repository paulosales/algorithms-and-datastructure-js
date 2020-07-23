function sqrt(n, precision = 0.000001) {
  let guess = n / 2
  while (Math.abs(guess * guess - n) > precision) {
    guess = (guess + n / guess) / 2
  }
  return guess
}

console.log(sqrt(16).toFixed(3), sqrt(4).toFixed(3), sqrt(10).toFixed(3))
