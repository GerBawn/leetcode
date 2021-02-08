function countGoodTriplets(
  arr: number[],
  a: number,
  b: number,
  c: number
): number {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const x = arr[i],
          y = arr[j],
          z = arr[k];
        const f1 = Math.abs(x - y) <= a;
        const f2 = Math.abs(y - z) <= b;
        const f3 = Math.abs(x - z) <= c;
        if (f1 && f2 && f3) {
          count++;
        }
      }
    }
  }
  return count;
}

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
console.log(countGoodTriplets([7, 3, 7, 3, 12, 1, 12, 2, 3], 5, 8, 1));
