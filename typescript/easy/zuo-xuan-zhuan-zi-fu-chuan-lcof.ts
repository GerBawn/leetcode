function reverseLeftWords(s: string, n: number): string {
  const arr = [];
  for (let i = n; i < s.length; i++) {
    arr.push(s[i]);
  }
  for (let i = 0; i < n; i++) {
    arr.push(s[i]);
  }

  return arr.join("");
}

function reverseLeftWords2(s: string, n: number): string {
  return s.substr(n).concat(s.substr(0, n));
}

function reverseLeftWords3(s: string, n: number): string {
  return s.concat(s.substr(0, n)).substr(n);
}
