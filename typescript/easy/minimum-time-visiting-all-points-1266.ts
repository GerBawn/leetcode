function minTimeToVisitAllPoints(points: number[][]): number {
  let count = 0;
  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[i - 1];
    count += Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
  }

  return count;
}

console.log(
  minTimeToVisitAllPoints([
    [3, 2],
    [-2, 2],
  ])
);
