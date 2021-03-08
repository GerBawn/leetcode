function frequencySort(nums: number[]): number[] {
  const m = new Map<number, number>();
  nums.forEach((n) => {
    m.set(n, (m.get(n) || 0) + 1);
  });
  let arr: [number, number][] = [];
  m.forEach((count, value) => {
    arr.push([count, value]);
  });

  arr = arr.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else {
      return a[1] - b[1] > 0 ? -1 : 1;
    }
  });

  // arr = baseSort(arr);

  const res = [];
  for (let i = 0; i < arr.length; i++) {
    let index = 0;
    const [count, value] = arr[i];
    while (index++ < count) {
      res.push(value);
    }
  }

  return res;
}

function baseSort(
  arr: [number, number][],
  base: number = 10
): [number, number][] {
  let digit = 1,
    max = arr[0][0],
    min = arr[0][0];
  arr.forEach((num) => {
    max = num[0] > max ? num[0] : max;
    min = num[0] < min ? num[0] : min;
  });
  while ((max - min) / digit > 1) {
    arr = sortBase(arr, min, digit, base);
    digit *= base;
  }

  return arr;
}

function sortBase(
  arr: [number, number][],
  min: number,
  digit: number,
  base: number
) {
  const bases = new Array(base).fill(0);
  let rax = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    const index = ~~((arr[i][0] - min) / digit) % base;
    bases[index]++;
  }
  for (let i = 1; i < bases.length; i++) {
    bases[i] += bases[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const index = ~~((arr[i][0] - min) / digit) % base;
    rax[--bases[index]] = arr[i];
  }

  return rax;
}

console.log(frequencySort([1, 4, 1, 4, 2, 2, 2, 3]));
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
