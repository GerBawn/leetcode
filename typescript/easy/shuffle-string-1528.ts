function restoreString(s: string, indices: number[]): string {
  const str: string[] = new Array(s.length);
  indices.forEach((strIndex, index) => {
    str[strIndex] = s[index];
  })

  return str.join('');
};

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
