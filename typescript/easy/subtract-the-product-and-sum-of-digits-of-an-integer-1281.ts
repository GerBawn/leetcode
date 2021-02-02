function subtractProductAndSum(n: number): number {
  let sum = 0;
  let product = 1;
  while (n !== 0) {
    const remainder = n % 10;
    sum += remainder;
    product *= remainder;
    n = Math.floor(n / 10);
  }
  return product - sum;
}

console.log(subtractProductAndSum(4421));
