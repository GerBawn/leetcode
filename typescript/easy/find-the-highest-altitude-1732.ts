function largestAltitude(gain: number[]): number {
  let max = 0,
    height = 0;
  for (let h of gain) {
    height += h;
    if (max < height) {
      max = height;
    }
  }

  return max;
}

console.log(largestAltitude([-5, 1, 5, 0, -7]));
