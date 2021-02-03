function maxDepth(s: string): number {
  let max = 0,
    depth = 0;
  for (let w of s) {
    if (w === "(") {
      depth++;
    } else if (w === ")") {
      if (depth > max) {
        max = depth;
      }
      depth--;
    }
  }

  return max;
}

console.log(maxDepth("(1+ +((8)/4))+1"));
console.log(maxDepth("(1)+((2))+(((3)))"));
console.log(maxDepth("8*((1*(5+6))*(8/6))"));
console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
console.log(
  maxDepth("(1+2)/(5+((4-9+8)*((1+8+(5*7)*4)/(7+9-5)))/(7/3-8-4-8))")
);
