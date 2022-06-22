module.exports = function reverse (n) {
  n = Math.abs(n).toString();
  n = n.split("").reverse().join("");
  return n * 1;
}
