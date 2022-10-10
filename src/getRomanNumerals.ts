/* export enum RomanNumerals {
  I = 1,
  V = 5,
  X = 10,
  L = 50,
  C = 100,
  D = 500,
  M = 1000
} */
/**
 * Adapt an integer to roman numerals
 * E.g:
 * 1 => 'I'
 * 2 => 'II'
 * 3 => 'III'
 * 4 => 'IV'
 * 5 => 'V'
 * 6 => 'VI'
 * 7 => 'VII'
 * 8 => 'VIII'
 * 9 => 'IX'
 * 10 => 'X'
 *
 * @param number integer to adapt
 * @returns romanNumeral string
 */
const getRomanNumerals = (number: number): string => {
  return number.toString();
};

export default getRomanNumerals;
