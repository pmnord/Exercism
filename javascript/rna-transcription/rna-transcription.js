export const toRna = dna => {

  const lib = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  }

  return dna.split('').map(el => lib[el]).join('')

};
