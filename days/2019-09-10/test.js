const tap = require('tap')
const path = require('path')
const partition = require('./solution')
const problemDay = path.basename(__dirname)

tap.test(`solution for ${problemDay} should work`, async assert => {
  assert.same(partition([3, 2, 1], 2), [1, 2, 3])
  assert.same(partition([3, 2, 1, 4, 5], 3), [1, 2, 3, 4, 5])
  assert.same(partition([3, 3, 2, 2, 1, 1], 2), [1, 1, 2, 2, 3, 3])
})
