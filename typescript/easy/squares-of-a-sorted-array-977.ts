function sortedSquares(nums: number[]): number[] {
  let i = 0;
  while (nums[i] < 0) {
    i++;
  }
  let left = i - 1,
    right = i,
    res = [],
    leftSquare = 0,
    rightSquare = 0;
  while (res.length < nums.length) {
    if (left >= 0 && right < nums.length) {
      leftSquare = nums[left] * nums[left];
      rightSquare = nums[right] * nums[right];
      if (leftSquare < rightSquare) {
        res.push(leftSquare);
        left--;
      } else {
        res.push(rightSquare);
        right++;
      }
    } else if (left < 0) {
      res.push(nums[right] * nums[right]);
      right++;
    } else {
      res.push(nums[left] * nums[left]);
      left--;
    }
  }
  return res;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
console.log(sortedSquares([-5, -3, -2, -1]));
