function hammingDistance(x: number, y: number): number {
  let xor = x ^ y;
  let count = 0;
  while (xor !== 0) {
    if (xor % 2 === 1) {
      xor -= 1;
      count++;
    }
    xor /= 2;
  }
  return count;
}

function hammingDistance2(x: number, y: number): number {
  let xor = x ^ y;
  let count = 0;
  while (xor !== 0) {
    xor &= xor - 1;
    count++;
  }

  return count;
}

console.log(hammingDistance(101, 79));
