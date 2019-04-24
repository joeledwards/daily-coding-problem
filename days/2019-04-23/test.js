const tap = require('tap')
const path = require('path')
const { tree: t, serialize: s, deserialize: d } = require('./solution')
const problemDay = path.basename(__dirname)

tap.test(`solution for ${problemDay} should work`, async assert => {
  assert.same(t(), d(s(t())))
  console.log(s(t()))

  assert.same(t('root'), d(s(t('root'))))
  console.log(s(t('root')))

  assert.same(t('root', t('left')), d(s(t('root', t('left')))))
  console.log(s(t('root', t('left'))))

  assert.same(t('root', null, t('right')), d(s(t('root', null, t('right')))))
  console.log(s(t('root', null, t('right'))))

  assert.same(t('root', t('left'), t('right')), d(s(t('root', t('left'), t('right')))))
  console.log(s(t('root', t('left'), t('right'))))

  assert.same(t('root', t('left', t('left.left')), t('right')), d(s(t('root', t('left', t('left.left')), t('right')))))
  console.log(s(t('root', t('left', t('left.left')), t('right'))))
})
