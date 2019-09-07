module.exports = peekable

function peekable (iterable) {
  let cache = null

  const hasNext = () => cache ? true : iterable.hasNext()

  const next = () => {
    let value
    if (cache) {
      value = cache
      cache = null
    } else {
      value = iterable.next()
    }
    return value
  }

  const peek = () => {
    if (!cache) {
      cache = iterable.next()
    }
    return cache
  }

  return {
    next,
    hasNext,
    peek
  }
}
