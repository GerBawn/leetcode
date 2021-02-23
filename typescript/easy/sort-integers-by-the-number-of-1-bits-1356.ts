function sortByBits(arr: number[]): number[] {
  const countArr: number[] = [];
  arr.forEach(num => countArr.push(getCountOfOne(num)));
  const groupedCount = new Array<number[]>(15);
  countArr.forEach((count, index) => {
    groupedCount[count] = groupedCount[count] || [];
    groupedCount[count].push(arr[index]);
  });

  return groupedCount.map(group => {
    return (group || []).sort((a, b) => a - b);
  }).flat();
}

function getCountOfOne(num: number): number {
  let count = 0;
  while (num !== 0) {
    if (num % 2 === 1) {
      count++;
    }
    num = num >> 1;
  }

  return count;
}

// console.log(sortByBits([0,1,2,3,4,5,6,7,8]));
console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1]));
console.log(sortByBits([10000,10000]));
console.log(sortByBits([2,3,5,7,11,13,17,19]));
