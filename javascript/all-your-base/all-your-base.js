export const convert = (digitsArray, currentBase, targetBase) => {
  // Argument validation
  if (
    currentBase === undefined ||
    currentBase < 2 ||
    !Number.isInteger(currentBase)
  )
    throw Error("Wrong input base");
  if (
    targetBase === undefined ||
    targetBase < 2 ||
    !Number.isInteger(targetBase)
  )
    throw Error("Wrong output base");
  if (digitsArray.length === 0) throw Error("Input has wrong format");
  if (digitsArray.length > 1 && digitsArray[0] === 0)
    throw Error("Input has wrong format");
  if (digitsArray.length === 1 && digitsArray[0] === 0) return [0];

  // Reduce array of digits into base 10 and validate each member
  const numberInBase10 = digitsArray.reduce((acc, cur, idx) => {
    if (cur < 0) throw Error("Input has wrong format");
    if (cur > currentBase - 1) throw Error("Input has wrong format");

    return acc + cur * currentBase ** (digitsArray.length - idx - 1);
  }, 0);

  
  // Get the starting place, or how many digits will be required to hold the number in its new base
  let currentPlace = 0;
  while (numberInBase10 >= targetBase ** currentPlace) {
    currentPlace++;
  }

  // Use iterative subtraction to transform the number into an array of digits in targetBase
  let remainingValue = numberInBase10;
  const result = [];

  while (currentPlace > 0) {
    let digit = 0;
    let currentPlaceValue = targetBase ** (currentPlace - 1);
    while (digit < targetBase && remainingValue - currentPlaceValue >= 0) {
      digit++;
      remainingValue -= currentPlaceValue;
    }
    result.push(digit);
    currentPlace--;
  }

  return result;
};
