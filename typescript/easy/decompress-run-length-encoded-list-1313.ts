function decompressRLElist(nums: number[]): number[] {
  const res: number[] = [];
  for (let i = 0; i < nums.length; i += 2) {
    let arr = new Array<number>(nums[i]);
    arr.fill(nums[i + 1]);
    console.log(arr);

    res.push(...arr);
  }

  return res;
}

console.log(decompressRLElist([1, 2, 3, 4]));
