module.exports = {
  cons,
  car,
  cdr
}

function cons (a, b) {
  function pair(f) {
    return f(a, b)
  }
  return pair
}

function car (c) {
  return c((a, b) => a)
}

function cdr (c) {
  return c((a, b) => b)
}
