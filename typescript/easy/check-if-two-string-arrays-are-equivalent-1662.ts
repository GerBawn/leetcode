function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  const len1 = word1.length,
    len2 = word2.length;
  let i1 = 0,
    i2 = 0,
    s1 = "",
    s2 = "",
    cursor = 0;
  while (true) {
    if (i1 === len1 && i2 === len2) {
      break;
    }
    if (i1 < len1) {
      s1 += word1[i1];
      i1++;
    }
    if (i2 < len2) {
      s2 += word2[i2];
      i2++;
    }
    const len = Math.min(s1.length, s2.length);
    while (cursor < len) {
      if (s1[cursor] !== s2[cursor]) {
        return false;
      }
      cursor++;
    }
  }

  return s1.length === s2.length;
}

function arrayStringsAreEqual2(word1: string[], word2: string[]): boolean {
  return (
    word1.reduce((str, word) => str.concat(word), "") ===
    word2.reduce((str, word) => str.concat(word), "")
  );
}

console.log(arrayStringsAreEqual2(["ab", "c"], ["a", "bc"]));
console.log(arrayStringsAreEqual2(["abc", "d", "defg"], ["abcddefg"]));
