const tap = require('tap')
const path = require('path')
const solution = require('./solution')
const problemDay = path.basename(__dirname)

tap.test(`solution for ${problemDay} should work`, async assert => {
  assert.same(solution([]), [])
  assert.same(solution([0]), [1])
  assert.same(solution([1]), [1])
  assert.same(solution([0, 0]), [0, 0])
  assert.same(solution([0, 1]), [1, 0])
  assert.same(solution([1, 0]), [0, 1])
  assert.same(solution([1, 1]), [1, 1])

  assert.same(solution([1, 2, 3]), [6, 3, 2])
  assert.same(solution([2, 2, 2]), [4, 4, 4])
  assert.same(solution([3, 2, 1]), [2, 3, 6])

  assert.same(solution([1, 9, 5, 2, 6]), [540, 60, 108, 270, 90])
})
