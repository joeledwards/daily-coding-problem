module.exports = solution

function solution (numbers) {
  // Requested: runtime=O(n) space=O(1)
  // First attempt: runtime=O(n) space=O(n)

  const max = numbers.length
  const track = new Array(max + 1)
  numbers.forEach((n, i) => {
    if (n > 0 && n <= max) {
      track[n] = n - 1
    }
  })

  // console.info(track)
  let value = 0

  for (i in track) {
    let w = Number(i) + 1
    let v = Number(numbers[i])
    if (v === w) {
      value = v
    } else {
      return w
    }
  }

  return value + 1
}
