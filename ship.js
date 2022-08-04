const Ship = (length) => {
  const hits = [];
  const hit = (x) => hits.push(x);
  const isSunk = () => hits.length === length;
  return { length, hits, hit, isSunk };
};

module.exports = Ship;
