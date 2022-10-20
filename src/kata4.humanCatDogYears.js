const humanCatDogYears = (number) => {
  const humanYears = number;
  const catYears = (number - 2) * 4 + 15 + 9;
  const dogYears = (number - 2) * 5 + 15 + 9;
  const newArray = [humanYears, catYears, dogYears];
  return newArray;
};

module.exports = humanCatDogYears;
