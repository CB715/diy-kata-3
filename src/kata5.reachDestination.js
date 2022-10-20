const reachDestination = (distance, speed) => {
  const time = distance / speed;
  const arrivalTime = Math.round(time * 2) / 2;
  return `I should be there in ${arrivalTime} hours`;
};

module.exports = reachDestination;
