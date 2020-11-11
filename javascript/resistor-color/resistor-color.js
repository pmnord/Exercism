//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]

export const colorCode = (color) => {
  if (typeof color !== 'string') {return "Argument must be a string"}

  let result = COLORS.indexOf(color.toLowerCase())

  if (result === -1) {return "That color is not part of the resistor electronic color code."}

  return result;
};

module.exports = {
  colorCode,
  COLORS
}
