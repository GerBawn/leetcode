class KthLargest {
  list: number[];
  k: number;
  constructor(k: number, nums: number[]) {
    this.list = nums.sort((a, b) => a - b);
    this.k = k;
  }

  add(val: number): number {
    const { list, k } = this;
    if (list.length === 0) {
      list.push(val);
      return val;
    }
    if (k > list.length || val >= list[list.length - k]) {
      let index = list.length;
      while (val < list[index - 1]) {
        index--;
      }
      list.splice(index, 0, val);
    }
    return list[list.length - k];
  }
}

function runTest(consArgs: [number, number[]], ...args: any[]) {
  // const k = new KthLargest(argus[0][0], argus[0][1]);
  const k = new KthLargest(...consArgs);
  args.forEach((arg) => {
    console.log(k.add(arg[0]));
  });
}

runTest([3, [5, -1]], [2], [1], [-1], [3], [4]);
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// const kthLargest: KthLargest = new KthLargest(3, [4, 5, 8, 2]);
// console.log(kthLargest.add(3)); // return 4
// console.log(kthLargest.add(5)); // return 5
// console.log(kthLargest.add(10)); // return 5
// console.log(kthLargest.add(9)); // return 8
// console.log(kthLargest.add(4)); // return 8

// const kthLargest: KthLargest = new KthLargest(1, []);
// console.log(kthLargest.add(-3)); // return 4
// console.log(kthLargest.add(-2)); // return 5
// console.log(kthLargest.add(-4)); // return 5
// console.log(kthLargest.add(0)); // return 8
// console.log(kthLargest.add(4)); // return 8

// const kthLargest: KthLargest = new KthLargest(2, [0]);
// console.log(kthLargest.add(-1)); // return 4
// console.log(kthLargest.add(1)); // return 5
// console.log(kthLargest.add(-2)); // return 5
// console.log(kthLargest.add(-4)); // return 8
// console.log(kthLargest.add(3)); // return 8
