function oddCells(n: number, m: number, indices: number[][]): number {
  const rowMap: { [index: number]: number } = {};
  const colMap: { [index: number]: number } = {};
  indices.forEach(([row, col]) => {
    rowMap[row] = (rowMap[row] || 0) + 1;
    colMap[col] = (colMap[col] || 0) + 1;
  });
  let oddCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const rowCount = rowMap[i] || 0;
      const colCount = colMap[j] || 0;
      if ((rowCount + colCount) % 2 === 1) {
        oddCount++;
      }
    }
  }

  return oddCount;
}
