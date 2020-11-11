const lib = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
}

export const score = (word) => {
  return word
    .toUpperCase()
    .split('')
    .reduce((acc, cur) => {
      for (const key in lib) {
        if (lib[key].includes(cur)) {
          return acc + Number(key);
        }
      }
    }, 0);
}