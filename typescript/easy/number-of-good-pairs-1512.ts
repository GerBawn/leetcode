function numIdenticalPairs(nums: number[]): number {
  let pairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      pairs += nums[i] === nums[j] ? 1 : 0;
    }
  }

  return pairs;
}

function numIdenticalPairs2(nums: number[]): number {
  let pairs: {
    [index: number]: number;
  } = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (pairs[num]) {
      pairs[num]++;
    } else {
      pairs[num] = 1;
    }
  }

  return Object.values(pairs).reduce(
    (acc: number, v: number) => acc + (v * (v - 1)) / 2,
    0
  );
}

console.log(numIdenticalPairs2([1, 2, 3, 1, 1, 3]));
