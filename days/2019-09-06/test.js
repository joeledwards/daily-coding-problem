const tap = require('tap')
const path = require('path')
const peekable = require('./solution')
const problemDay = path.basename(__dirname)

tap.test(`solution for ${problemDay} should work`, async assert => {
  let i = iterable
  let p = peekable

  let a = i([])
  assert.equal(a.hasNext(), false)
  assert.equal(a.next(), undefined)

  let b = p(i([]))
  assert.equal(b.hasNext(), false)
  assert.equal(b.peek(), undefined)
  assert.equal(b.next(), undefined)

  let c = i([1,2,3])
  assert.equal(c.hasNext(), true)
  assert.equal(c.next(), 1)
  assert.equal(c.hasNext(), true)
  assert.equal(c.next(), 2)
  assert.equal(c.hasNext(), true)
  assert.equal(c.next(), 3)
  assert.equal(c.hasNext(), false)
  assert.equal(c.next(), undefined)

  let d = p(i([1,2,3]))
  assert.equal(d.hasNext(), true)
  assert.equal(d.peek(), 1)
  assert.equal(d.next(), 1)
  assert.equal(d.hasNext(), true)
  assert.equal(d.peek(), 2)
  assert.equal(d.next(), 2)
  assert.equal(d.peek(), 3)
  assert.equal(d.hasNext(), true)
  assert.equal(d.next(), 3)
  assert.equal(d.hasNext(), false)
  assert.equal(d.peek(), undefined)
  assert.equal(d.next(), undefined)
})

function iterable (array) {
  let offset = 0

  const hasNext = () => offset < array.length

  const next = () => {
    let value = array[offset]
    offset++
    return value
  }

  return {
    hasNext,
    next
  }
}

