function isOneBitCharacter(bits: number[]): boolean {
  let i = 0;

  while (i < bits.length) {
    if (i === bits.length - 1) {
      return true;
    }
    if (bits[i] === 0) {
      i++;
    } else {
      i += 2;
    }
  }

  return false;
}

console.log(isOneBitCharacter([1, 0, 0]));
console.log(isOneBitCharacter([1, 1, 1, 0]));
console.log(isOneBitCharacter([1, 1, 1, 0, 0, 0, 0]));
console.log(isOneBitCharacter([0]));
