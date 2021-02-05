function numberOfSteps(num: number): number {
  let step = 0;
  while (num !== 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num--;
    }
    step++;
  }

  return step;
}

console.log(numberOfSteps(14));
