export class Matrix {
  constructor(string) {
    this.rows = Matrix.stringToRows(string);
    this.columns = Matrix.transpose(this.rows);
  }

  static stringToRows(string) { // Returns a two-dimensional array of integers
    return string
      .split('\n')
      .map(string => string
        .split(' ')
        .map(stringNum => Number(stringNum)));
  }

  static transpose(rows) { // Transposes rows to columns
    const result = [];

    for (let i = 0; i < rows[0].length; i++) {
      let column = [];
      for (let j = 0; j < rows.length; j++) {
        column.push(rows[j][i])
      }
      result.push(column);
    }
    return result;
  }
}