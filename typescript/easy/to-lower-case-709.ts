function toLowerCase(str: string): string {
  const charCodeOfa = "a".charCodeAt(0);
  const charCodeOfA = "A".charCodeAt(0);
  const charCodeOfZ = "Z".charCodeAt(0);
  const distance = charCodeOfA - charCodeOfa;
  let res: number[] = [];
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= charCodeOfA && charCode <= charCodeOfZ) {
      charCode -= distance;
    }
    res.push(charCode);
  }

  return String.fromCharCode(...res);
}

console.log(toLowerCase("HeLlO"));
