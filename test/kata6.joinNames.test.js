const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toEqual("Bart, Lisa & Maggie");
  });
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([
        { name: "John" },
        { name: "David" },
        { name: "Steven" },
        { name: "Michael" },
      ])
    ).toEqual("John, David, Steven & Michael");
  });
});
