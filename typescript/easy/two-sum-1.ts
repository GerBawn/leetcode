function twoSum1(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [0, 0];
}

function twoSum2(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const remain = target - i;
    const j = nums.findIndex((n) => n === remain, i);
    if (j !== -1) {
      return [i, j];
    }
  }

  return [0, 0];
}

function twoSum3(nums: number[], target: number): number[] {
  const m: { [index: number]: number } = {};
  nums.forEach((v, i) => (m[v] = i));
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];
    const j = m[remain];
    if (j && i !== j) {
      return [i, j];
    }
  }
  return [0, 0];
}

console.log(twoSum3([3, 2, 4], 6));
