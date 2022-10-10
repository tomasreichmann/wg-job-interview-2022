import getRomanNumerals from "./getRomanNumerals";

describe("getRomanNumerals", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
    [9, "IX"],
    [10, "X"]
  ])("with parameter %s should return %s", (number, expected) => {
    const actual = getRomanNumerals(number);
    expect(actual).toBe(expected);
  });
});
