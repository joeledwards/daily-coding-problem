module.exports = solution

function solution (numbers, k) {
  const observed = new Set()
  for (const n of numbers) {
    const needed = k - n
    if (observed.has(needed)) {
      return true
    }
    observed.add(n)
  }
  return false
}
