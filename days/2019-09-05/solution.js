module.exports = solution

function solution (amount) {
  return quarter(amount)
}

const penny = coin(1)
const nickle = coin(5, penny)
const dime = coin(10, nickle)
const quarter = coin(25, dime)

function coin (value, next = (() => 0)) {
  return amount => {
    const count = Math.floor(amount / value)
    const remainder = amount - count * value
    return count + next(remainder)
  }
}
