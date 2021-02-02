function minCount(coins: number[]): number {
  return coins.reduce((count, coin) => {
    return count + Math.ceil(coin / 2);
  }, 0);
}

console.log(minCount([4, 2, 1]));
