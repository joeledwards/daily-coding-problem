const tap = require('tap')
const path = require('path')
const { tree: t, countUnival: cu } = require('./solution')
const problemDay = path.basename(__dirname)

tap.test(`solution for ${problemDay} should work`, async assert => {
  assert.same(cu(), 0)
  assert.same(cu(t()), 1)
  assert.same(cu(t(null, t())), 1)
  assert.same(cu(t(undefined, t())), 2)

  assert.same(cu(t(1)), 1)
  assert.same(cu(t(1, t(2))), 1)
  assert.same(cu(t(1, t(1))), 2)

  assert.same(cu(t(1, t(1), t(0, t(1, t(1), t(1)), t(0)))), 5)
})
