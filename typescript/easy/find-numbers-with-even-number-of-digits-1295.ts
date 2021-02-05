function findNumbers(nums: number[]): number {
  return nums.reduce((count, num) => {
    if (String(num).length % 2 === 0) {
      count++;
    }
    return count;
  }, 0);
}

console.log(findNumbers([555, 901, 482, 1771]));
