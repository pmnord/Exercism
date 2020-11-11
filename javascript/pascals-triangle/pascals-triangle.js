export const rows = (n = 0) => {
  const triangle = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      let number;
      if (triangle[i - 1] && triangle[i - 1][j - 1] && triangle[i - 1][j]) {
        number = triangle[i - 1][j - 1] + triangle[i - 1][j];
      } else {
        number = 1;
      }
      row.push(number);
    }
    triangle.push(row);
  }
  return triangle;
};