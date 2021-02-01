function decode(encoded: number[], first: number): number[] {
  const res = [first];
  encoded.forEach((num) => {
    res.push(num ^ res[res.length - 1]);
  });

  return res;
}

console.log(decode([6, 2, 7, 3], 4));
