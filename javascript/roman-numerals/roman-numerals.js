const romanNumeralMap = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

export const toRoman = (n) => {
  let romanNumeralString = "";
  for (let numeral of Object.entries(romanNumeralMap)) {
    while (n - numeral[1] >= 0) {
      romanNumeralString += numeral[0];
      n -= numeral[1];
    }
  }
  return romanNumeralString;
};
