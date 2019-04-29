module.exports = {
  countUnival,
  tree
}

function countUnival (tree) {
  const [,c] = count(tree)
  return c
}

function count (tree, prev) {
  if (tree == null) {
    return [true, 0]
  }

  const [lm, lc] = count(tree.left, tree.val)
  const [rm, rc] = count(tree.right, tree.val)
  const match = tree.val === prev

  return [match && lm && rm, (rm && lm ? 1 : 0) + lc + rc]
}

function tree (val, left, right) {
  return {
    val,
    left,
    right
  }
}
