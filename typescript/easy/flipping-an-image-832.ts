function flipAndInvertImage(image: number[][]): number[][] {
  const map = [1, 0];
  for (let i = 0; i < image.length; i++) {
    const row = image[i];
    let start = 0,
      end = row.length - 1;
    while (start <= end) {
      [row[start], row[end]] = [map[row[end]], map[row[start]]];
      start++;
      end--;
    }
  }

  return image;
}

console.log(
  flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ])
);
