const tap = require('tap')
const path = require('path')
const { car, cdr, cons } = require('./solution')
const problemDay = path.basename(__dirname)

tap.test(`solution for ${problemDay} should work`, async assert => {
  assert.equal(car(cons('a', 'b')), 'a')
  assert.equal(cdr(cons('a', 'b')), 'b')
})
