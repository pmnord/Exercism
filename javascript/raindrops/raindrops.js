export const convert = (int) => {
  let result = '';

  if (int % 3 === 0) { result += "Pling" }
  if (int % 5 === 0) { result += "Plang" }
  if (int % 7 === 0) { result += "Plong" }
  if (result.length === 0) { result += int }

  return result;
};