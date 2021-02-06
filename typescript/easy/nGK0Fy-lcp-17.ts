function calculate(s: string): number {
  const calc = (x: number, y: number): number => 2 * x + y;
  let x = 1,
    y = 0;
  for (let char of s) {
    if (char === "A") {
      x = calc(x, y);
    } else {
      y = calc(y, x);
    }
  }

  return x + y;
}

console.log(calculate("ABA"));
