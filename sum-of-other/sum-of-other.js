const sumOfOther = function sum(array) {
  const reduced = array.reduce((a, b) => a + b);
  return array.map(item => reduced - item);
};

module.exports = sumOfOther;
