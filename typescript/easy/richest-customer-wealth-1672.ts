function maximumWealth(accounts: number[][]): number {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    let sum = 0;
    for (let j = 0; j < account.length; j++) {
      sum += account[j];
    }
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

function maximumWealth2(accounts: number[][]): number {
  let max = 0;
  accounts.forEach(
    (account) =>
      (max = Math.max(
        max,
        account.reduce((total, curr) => total + curr, 0)
      ))
  );

  return max;
}

console.log(
  maximumWealth2([
    [1, 2, 3],
    [3, 4, 5],
    [1, 3, 9],
    [4, 5, 1],
  ])
);
