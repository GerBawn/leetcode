function sumOfUnique(nums: number[]): number {
  const map = new Map();
  let sum = 0;
  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });
  for (let [value, count] of map.entries()) {
    if (count === 1) {
      sum += value;
    }
  }

  return sum;
}
