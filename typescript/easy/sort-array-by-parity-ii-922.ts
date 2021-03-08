function sortArrayByParityII(nums: number[]): number[] {
  const oddArr: number[] = [],
    evenArr: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const isOdd = i % 2 === 1;
    if (isSameOdevity(i, nums[i])) {
      continue;
    }
    if (isOdd) {
      // 如果奇数数组里有数据，说明之前有一个偶数索引里存了一个奇数，且还没被交换
      if (oddArr.length) {
        const temp = oddArr.pop()!;
        [nums[i], nums[temp]] = [nums[temp], nums[i]];
      } else {
        // 奇数索引位的数据为偶数，所以将索引推到偶数数组中
        evenArr.push(i);
      }
    } else {
      if (evenArr.length) {
        const temp = evenArr.pop()!;
        [nums[i], nums[temp]] = [nums[temp], nums[i]];
      } else {
        oddArr.push(i);
      }
    }
  }

  return nums;
}

function sortArrayByParityII2(nums: number[]): number[] {
  const res = new Array(nums.length);
  let oddIndex = 1;
  let eventIndex = 0;
  for (let num of nums) {
    if (num % 2 === 0) {
      res[eventIndex] = num;
      eventIndex += 2;
    } else {
      res[oddIndex] = num;
      oddIndex += 2;
    }
  }

  return res;
}

function isSameOdevity(index: number, num: number): boolean {
  return index % 2 === num % 2;
}

console.log(sortArrayByParityII([1, 2, 3, 4]));
