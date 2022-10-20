const joinNames = (namesObj) => {
  const firstNames = namesObj.map(({ name }) => name);
  const lastName = firstNames.pop();
  return `${firstNames.join(", ")} & ${lastName}`;
};

module.exports = joinNames;
