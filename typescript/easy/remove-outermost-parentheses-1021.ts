function removeOuterParentheses(S: string): string {
  let count = 0,
    l = 0,
    r = 0,
    res: string[] = [];
  for (let c of S) {
    if (c === "(") {
      l++;
      if (l !== r + 1) {
        //原语字符串的第一个左括号不要
        res.push(c);
      }
    } else {
      r++;
      if (l !== r) {
        //原语字符串的最后一个右括号不要
        res.push(c);
      }
    }
  }

  return res.join("");
}

console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));
