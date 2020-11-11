//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const millisecondsToIncrement = 10**12;

export const gigasecond = (moment) => {

  const momentInMilliseconds = new Date(moment).getTime();

  if (isNaN(momentInMilliseconds) === true) {
    return { error: `The argument was not a valid date` };
  }

  return new Date(momentInMilliseconds + millisecondsToIncrement);

};