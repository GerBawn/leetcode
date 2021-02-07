function balancedStringSplit(s: string): number {
  let count = 0,
    l = 0;
  for (let c of s) {
    if (c === "R") {
      l++;
    } else {
      l--;
    }
    if (l === 0) {
      count++;
    }
  }

  return count;
}

console.log(balancedStringSplit("RRLRRLRLLLRL"));

console.log(balancedStringSplit("RLLLLRRRLR"));
console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("LLLLRRRR"));
console.log(balancedStringSplit("RLRRRLLRLL"));
