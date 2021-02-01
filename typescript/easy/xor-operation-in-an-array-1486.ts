function xorOperation(n: number, start: number): number {
  let res: number = start;
  for (let i = 1; i < n; i++) {
    res ^= start + 2 * i;
  }

  return res;
}

console.log(xorOperation(1, 7));
