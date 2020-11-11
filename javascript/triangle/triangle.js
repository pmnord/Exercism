export class Triangle {
  constructor(a, b, c) {
    if (arguments.length !== 3) { throw Error('Your triangle must have 3 sides') }
    for (let n of arguments) {
      if (typeof n !== 'number') throw Error(`Passed invalid type ${typeof n} to Triangle constructor`)
    }

    this.sidesSet = new Set([a, b, c]);
    this.isTriangle = Triangle.isTriangle(a, b, c);
  }

  static isTriangle(a, b, c) {
    const arr = [a, b, c].sort();
    return arr[0] + arr[1] > arr[2];
  }

  isEquilateral() {
    if (!this.isTriangle) { return false; }
    return this.sidesSet.size === 1 && this.a !== 0;
  }

  isIsosceles() {
    if (!this.isTriangle) { return false; }
    return this.sidesSet.size <= 2;
  }

  isScalene() {
    if (!this.isTriangle) { return false; }
    return this.sidesSet.size === 3;
  }
}