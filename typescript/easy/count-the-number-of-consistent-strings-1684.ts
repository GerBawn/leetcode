function countConsistentStrings(allowed: string, words: string[]): number {
  const set = new Set();
  let count = 0;
  for (let s of allowed) {
    set.add(s);
  }
  for (let word of words) {
    if (word.split("").every((s) => set.has(s))) {
      count++;
    }
  }

  return count;
}

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
);
