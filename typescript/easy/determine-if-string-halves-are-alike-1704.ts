function halvesAreAlike(s: string): boolean {
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let c1 = 0,
    c2 = 0;
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (set.has(s[i])) {
      c1++;
    }
    if (set.has(s[j])) {
      c2++;
    }
  }

  return c1 === c2;
}

console.log(halvesAreAlike("book"));
console.log(halvesAreAlike("textbook"));
console.log(halvesAreAlike("MerryChristmas"));
console.log(halvesAreAlike("AbCdEfGh"));
