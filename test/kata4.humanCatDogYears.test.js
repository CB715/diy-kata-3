const { humanCatDogYears } = require("../src");

describe("change human years to cat and dog years", () => {
  it("return array of human, cat and dog years when human years entered", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
  it("return array of human, cat and dog years when human years entered", () => {
    expect(humanCatDogYears(11)).toEqual([11, 60, 69]);
  });
});
