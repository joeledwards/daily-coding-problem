module.exports = solution

function solution (message) {
  // Count ways it can be decoded:
  // Recursively walk the string, returning 1 for each terminal call, summing at the end (not tail-recursive).
  // Alternatively we could construct a tree and count the leaves.

  if (message.length < 1) {
    return 0
  }

  return decodeCount(message)
}

function decodeCount(message) {
  const { length } = message

  if (length === 0) {
    return 1
  }

  const a = message[0]

  if (length === 1) {
    return (a === '0') ? 0 : 1
  }

  const b = message[1]

  if (a === '1') {
    switch (b) {
      case '0':
        return decodeCount(message.slice(2))
      default:
        return decodeCount(message.slice(1)) + decodeCount(message.slice(2))
    }
  }

  if (a === '2') {
    switch (b) {
      case '0': 
        return decodeCount(message.slice(2))
      case '7':
      case '8':
      case '9':
        return decodeCount(message.slice(1))
      default:
        return decodeCount(message.slice(1)) + decodeCount(message.slice(2))
    }
  }

  return decodeCount(message.slice(1))
}
