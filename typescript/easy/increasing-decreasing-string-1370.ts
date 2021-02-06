function sortString(s: string): string {
  const charA = "a".charCodeAt(0);
  const map: number[] = Array(26).fill(0);
  for (let char of s) {
    map[char.charCodeAt(0) - charA]++;
  }
  const result: string[] = [];
  let flag = true; // true为正序遍历，false为反向遍历
  while (result.length !== s.length) {
    if (flag) {
      for (let index = 0; index < map.length; index++) {
        if (map[index] !== 0) {
          result.push(String.fromCharCode(index + charA));
          map[index]--;
        }
      }
    } else {
      for (let index = map.length - 1; index >= 0; index--) {
        if (map[index] !== 0) {
          result.push(String.fromCharCode(index + charA));
          map[index]--;
        }
      }
    }
    flag = !flag;
  }

  return result.join("");
}

console.log(sortString("leetcode"));
