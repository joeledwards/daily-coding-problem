const tap = require('tap')
const path = require('path')
const solution = require('./solution')
const problemDay = path.basename(__dirname)

tap.test(`solution for ${problemDay} should work`, async assert => {
  assert.equal(solution([], 0), false)
  assert.equal(solution([], 1), false)
  assert.equal(solution([0], 0), false)
  assert.equal(solution([1], 1), false)
  assert.equal(solution([0, 0], 0), true)
  assert.equal(solution([0, 1], 0), false)
  assert.equal(solution([0, 1], 1), true)
  assert.equal(solution([1, 1], 1), false)
})
