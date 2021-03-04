function maximumGap(arr: number[]): number {
  const [min, max] = getMinAndMax(arr);
  // const size = ~~((max - min) / (arr.length - 1));
  const d = Math.max(1, ~~((max - min) / (arr.length - 1)));
  const size = ~~((max - min) / d) + 1;
  const buckets = new Array(size);
  for (let i = 0; i < size; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < arr.length; i++) {
    const idx = ~~((arr[i] - min) / d);
    buckets[idx].push(arr[i]);
  }

  const bucketInfo = [];
  let gap = 0;
  for (let i = 0; i < size; i++) {
    if (buckets[i].length > 0) {
      bucketInfo.push(getMinAndMax(buckets[i]));
    }
  }

  for (let i = 1; i < bucketInfo.length; i++) {
    const curGap = bucketInfo[i][0] - bucketInfo[i - 1][1];
    if (curGap > gap) {
      gap = curGap;
    }
  }

  return gap;
}

function getMinAndMax(arr: number[]): [number, number] {
  let max = arr[0],
    min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max = arr[i] > max ? arr[i] : max;
    min = arr[i] < min ? arr[i] : min;
  }

  return [min, max];
}

function maximumGap2(nums: number[]): number {
  if (nums.length < 2) {
    return 0;
  }
  if (nums.length === 2) {
    return nums[1] > nums[0] ? nums[1] - nums[0] : nums[0] - nums[1];
  }
  const arr = quickSort(nums);
  let max = arr[1] - arr[0];
  for (let i = 2; i < nums.length; i++) {
    const sub = arr[i] - arr[i - 1];
    if (sub > max) {
      max = sub;
    }
  }

  return max;
}

function quickSort(arr: number[]): number[] {
  if (arr.length > 1) {
    const middle = ~~(arr.length / 2);
    const separateIndex = splitArr(arr, middle);
    if (separateIndex < arr.length) {
      const left = quickSort(arr.slice(0, separateIndex));
      const right = quickSort(arr.slice(separateIndex));
      return [...left, ...right];
    }
  }

  return arr;
}

function splitArr(arr: number[], middle: number): number {
  let i = 0,
    j = arr.length - 1,
    base = arr[middle];
  while (i <= j) {
    while (arr[i] < base) {
      i++;
    }
    while (arr[j] > base) {
      j--;
    }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  return i;
}

// console.log(maximumGap([3, 6, 9, 1]));
// console.log(maximumGap2([1, 3, 100]));
// console.log(maximumGap2([1, 1, 1, 1, 1, 5, 5, 5, 5, 5]));
console.log(
  maximumGap([
    15252,
    16764,
    27963,
    7817,
    26155,
    20757,
    3478,
    22602,
    20404,
    6739,
    16790,
    10588,
    16521,
    6644,
    20880,
    15632,
    27078,
    25463,
    20124,
    15728,
    30042,
    16604,
    17223,
    4388,
    23646,
    32683,
    23688,
    12439,
    30630,
    3895,
    7926,
    22101,
    32406,
    21540,
    31799,
    3768,
    26679,
    21799,
    23740,
  ])
);

// function
