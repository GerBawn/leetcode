function createTargetArray(nums: number[], index: number[]): number[] {
  const res: number[] = [];
  for (let i in nums) {
    if (index[i] === 0) {
      res.unshift(nums[i]);
    } else {
      res.splice(index[i], 0, nums[i]);
    }
  }

  return res;
}

function createTargetArray2(nums: number[], indexs: number[]): number[] {
  const res: number[] = [];
  for (let i in nums) {
    const index = indexs[i];
    if (res[index] !== undefined) {
      for (let j = res.length - 1; j >= index; j--) {
        res[j + 1] = res[j];
      }
    }
    res[index] = nums[i];
  }

  return res;
}

function createTargetArray3(nums: number[], index: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    result.splice(index[i], 0, nums[i]);
  }
  return result;
}

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 0, 0, 0, 0]));
