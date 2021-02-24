function uniqueOccurrences(arr: number[]): boolean {
  const m = new Map<number, number>();
  arr.forEach((num) => {
    const count = m.get(num) || 0;
    m.set(num, count + 1);
  });
  const s = new Set<number>(m.values());
  return s.size === m.size;
}

console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
console.log(uniqueOccurrences([1, 2]));
