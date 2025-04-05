function trailingZeros(n) {
  let count = 0;
  n = parseInt(n); // Convert input to number in case it's a string from prompt
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
