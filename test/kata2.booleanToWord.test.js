const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("changes a boolean value to a string", () => {
    expect(booleanToWord(true)).toEqual("Yes");
  });
  it("Returns No if boolean is false", () => {
    expect(booleanToWord(false)).toEqual("No");
  });
});
