function sumOddLengthSubarrays(arr: number[]): number {
  const len = arr.length;
  let total = 0;
  for (let i = 1; i <= len; i += 2) {
    // 计算指定长度中子序列的和中一个元素最多被使用的次数
    const temp = len + 1 - i < i ? len + 1 - i : i;
    let sum = 0; // 子序列和
    for (let j = 0; j < arr.length; j++) {
      // 第j和第len-j个元素会被使用的次数
      const multiple = Math.min(j + 1, len - j, temp);
      sum += arr[j] * multiple;
    }
    total += sum;
  }

  return total;
}

function sumOddLengthSubarrays2(arr: number[]): number {
  const len = arr.length;
  let total = 0;
  for (let i = 1; i <= len; i += 2) {
    for (let j = 0; j <= len - i; j++) {
      for (let k = j; k < j + i; k++) {
        total += arr[k];
      }
    }
  }

  return total;
}

function sumOddLengthSubarrays3(arr: number[]): number {
  /*
    对于一个数字，它所在的数组，可以在它前面再选择 0, 1, 2, ... 个数字，一共有 left = i + 1 个选择；

    可以在它后面再选择 0, 1, 2, ... 个数字，一共有 right = n - i 个选择。

    如果在前面选择了偶数个数字，那么在后面，也必须选择偶数个数字，这样加上它自身，才构成奇数长度的数组；

    如果在前面选择了奇数个数字，那么在后面，也必须选择奇数个数字，这样加上它自身，才构成奇数长度的数组；

    数字前面共有 left 个选择，其中偶数个数字的选择方案有 left_even = (left + 1) / 2 个，奇数个数字的选择方案有 left_odd = left / 2 个；

    数字后面共有 right 个选择，其中偶数个数字的选择方案有 right_even = (right + 1) / 2 个，奇数个数字的选择方案有 right_odd = right / 2 个；

    所以，每个数字一共在 left_even * right_even + left_odd * right_odd 个奇数长度的数组中出现过
  */
  const len = arr.length;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const left = i + 1;
    const right = len - i;
    const leftEven = Math.floor((left + 1) / 2);
    const leftOdd = Math.floor(left / 2);
    const rightEven = Math.floor((right + 1) / 2);
    const rightOdd = Math.floor(right / 2);
    sum += (leftEven * rightEven + leftOdd * rightOdd) * arr[i];
  }

  return sum;
}

console.log(sumOddLengthSubarrays3([1, 4, 2, 5, 3]));
