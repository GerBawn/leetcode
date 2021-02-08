function countGoodRectangles(rectangles: number[][]): number {
  let max = 0, count = 0;

  rectangles.map(([length, width]) => {
    const maxLen = length > width ? width : length;
    if (maxLen > max) {
      count = 1;
      max = maxLen;
    } else if (maxLen === max) {
      count++;
    }
  });

  return count;
}

console.log(countGoodRectangles([[5, 8], [3, 9], [5, 12], [16, 5]]));
console.log(countGoodRectangles([[2,3],[3,7],[4,3],[3,7]]));
