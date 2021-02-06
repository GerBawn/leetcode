function busyStudent(
  startTime: number[],
  endTime: number[],
  queryTime: number
): number {
  return startTime.reduce((count, st, index) => {
    if (queryTime >= st && queryTime <= endTime[index]) {
      count++;
    }
    return count;
  }, 0);
}

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
