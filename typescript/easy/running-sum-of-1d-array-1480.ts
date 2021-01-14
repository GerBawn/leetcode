function runningSum(nums: number[]): number[] {
  return nums.reduce((totals: number[], curr) => {
    const sum = (totals[totals.length - 1] || 0) + curr;
    totals.push(sum);
    return totals;
  }, []);
}

function runningSum2(nums: number[]): number[] {
  let sum = 0;
  return nums.map((value) => {
    sum += value;
    return sum;
  });
}

function runningSum3(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
}
