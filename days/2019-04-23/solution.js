module.exports = {
  tree,
  serialize,
  deserialize
}

function tree (val, left, right) {
  return {
    val,
    left,
    right
  }
}

function serialize (tree) {
  return JSON.stringify(tree)
}

function deserialize (string) {
  return assemble(JSON.parse(string))
}

function assemble (options) {
  if (options) {
    const { val, left, right } = options
    return tree(val, assemble(left), assemble(right))
  }
}
