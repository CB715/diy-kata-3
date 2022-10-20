const booleanToWord = (boolean) => {
  if (boolean === true) {
    return "Yes";
  }
  if (boolean === false) {
    return "No";
  }
  return boolean;
};

module.exports = booleanToWord;
