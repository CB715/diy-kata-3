const numberToReversedDigits = (number) => {
  const myNewArray = [number];
  return myNewArray
    .toString()
    .split("")
    .reverse()
    .map((x) => parseInt(x));
};

module.exports = numberToReversedDigits;
