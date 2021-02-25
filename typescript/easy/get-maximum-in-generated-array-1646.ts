function getMaximumGenerated(n: number): number {
  let max = n === 0 ? 0 : 1,
    res = [0, 1],
    index = 2;
  while (res.length < n + 1) {
    let cur: number;
    if (index % 2 === 0) {
      cur = res[index / 2];
    } else {
      cur = res[(index - 1) / 2] + res[(index - 1) / 2 + 1];
    }
    res.push(cur);
    index++;
    max = max < cur ? cur : max;
  }
  return max;
}

console.log(getMaximumGenerated(2));
