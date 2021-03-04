function canMakeArithmeticProgression(arr: number[]): boolean {
  arr = baseSort(arr);
  const sub = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== sub) {
      return false;
    }
  }
  return true;
}

function baseSort(arr: number[], base: number = 10): number[] {
  if (arr.length < 2) {
    return arr;
  }
  let max = arr[0],
    min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max = arr[i] > max ? arr[i] : max;
    min = arr[i] < min ? arr[i] : min;
  }
  let digit = 1;
  while ((max - min) / digit >= 1) {
    arr = sortBase(arr, base, min, digit);
    digit *= base;
  }

  return arr;
}

function sortBase(
  arr: number[],
  base: number,
  min: number,
  digit: number
): number[] {
  const buckets = new Array(base + 1).fill(0);
  const aux = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    const index = ~~(((arr[i] - min) / digit) % base);
    buckets[index]++;
  }
  for (let i = 1; i < base; i++) {
    buckets[i] += buckets[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const index = ~~(((arr[i] - min) / digit) % base);
    aux[--buckets[index]] = arr[i];
  }

  return aux;
}

console.log(canMakeArithmeticProgression([3, 5, 1, 7, 8]));
