function numJewelsInStones(jewels: string, stones: string): number {
  const pairs: { [index: string]: number } = {};
  for (let i = 0; i < jewels.length; i++) {
    pairs[jewels[i]] = 0;
  }
  for (let i = 0; i < stones.length; i++) {
    const stone = stones[i];
    if (pairs[stone] !== undefined) {
      pairs[stone]++;
    }
  }

  return Object.values(pairs).reduce((curr, i) => curr + i, 0);
}
