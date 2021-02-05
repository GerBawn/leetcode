function diagonalSum(mat: number[][]): number {
  const len = mat.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i + j === len - 1 || i === j) {
        sum += mat[i][j];
      }
    }
  }

  return sum;
}

function diagonalSum2(mat: number[][]): number {
  let sum = 0;
  const len = mat.length;
  for (let i = 0; i < len; i++) {
    sum += mat[i][i] + mat[i][len - i - 1];
  }

  if (len % 2 === 1) {
    const index = (len - 1) / 2;
    sum -= mat[index][index];
  }

  return sum;
}

console.log(diagonalSum2([[5]]));
console.log(
  diagonalSum2([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  diagonalSum2([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
