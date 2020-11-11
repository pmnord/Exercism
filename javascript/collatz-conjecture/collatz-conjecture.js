export const steps = (n) => {
  let counter = 0;
  let current = n;

  if (current < 1) {throw Error('Only positive numbers are allowed')}

  while (current !== 1) {
    current % 2 === 0 
      ? current = (current / 2) 
      : current = (current * 3 + 1);

    counter++;
  }

  return counter;
};