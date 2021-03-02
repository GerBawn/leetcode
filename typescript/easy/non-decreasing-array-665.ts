function checkPossibility(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i],
      y = nums[i + 1];
    if (x > y) {
      nums[i] = y;
      if (isSorted(nums)) {
        return true;
      }
      nums[i] = x;
      nums[i + 1] = x;
      return isSorted(nums);
    }
  }

  return true;
}

function isSorted(nums: number[]) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }

  return true;
}

function checkPossibility2(nums: number[]): boolean {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    const x = nums[i],
      y = nums[i + 1];
    if (x > y) {
      count++;
      if (count > 1) {
        return false;
      }
      if (i > 0 && nums[i - 1] > y) {
        nums[i + 1] = x;
      }
    }
  }

  return true;
}

console.log(checkPossibility2([3, 4, 2, 3]));
console.log(checkPossibility2([4, 2, 3]));
console.log(checkPossibility2([5, 7, 1, 8]));
console.log(checkPossibility2([5, 7, 8, 1]));
console.log(checkPossibility2([-1, 4, 2, 3]));
