module.exports = solution

function solution (numbers) {
  return numbers.map((n, i) => numbers.filter((o, j) => j !== i).reduce((acc, p) => acc * p, 1))
}
