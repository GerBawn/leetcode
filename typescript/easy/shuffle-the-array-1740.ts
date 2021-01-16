function shuffle(nums: number[], n: number): number[] {
  const res: number[] = new Array(2 * n);
  for (let i = 0; i < n; i++) {
    res[2 * i] = nums[i];
    res[2 * i + 1] = nums[n + i];
  }

  return res;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
