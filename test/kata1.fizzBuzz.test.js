const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
  });
  

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz(30)).toEqual('FizzBuzz');
    expect(fizzBuzz(60)).toEqual('FizzBuzz');
  });


  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(7)).toEqual(7);
    expect(fizzBuzz(14)).toEqual(14);
    expect(fizzBuzz(37)).toEqual(37);
  });
});
