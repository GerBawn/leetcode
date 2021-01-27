function smallerNumbersThanCurrent(nums: number[]): number[] {
  const len = nums.length;
  const res = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (nums[i] > nums[j]) {
        res[i]++;
      } else if (nums[i] < nums[j]) {
        res[j]++;
      }
    }
  }

  return res;
}

function smallerNumbersThanCurrent2(nums: number[]): number[] {
  const arr = new Array(101).fill(0);
  // 将每个数字出现的次数放到arr中
  nums.forEach((num) => arr[num]++);
  let sum = 0;
  const sumArr: number[] = [];
  // 累加arr数组，index之前的sum就是比index小的数字出现的次数
  arr.forEach((num) => {
    sumArr.push(sum);
    sum += num;
  });

  return nums.map((index) => sumArr[index]);
}

console.log(smallerNumbersThanCurrent2([7, 7, 7, 7]));
