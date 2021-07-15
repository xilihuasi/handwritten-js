function listToTree(data) {
  const tree = {}
  const treeData = []
  for (let i = 0; i < data.length; i++) {
    tree[data[i].id] = data[i]
  }

  for (const i in tree) {
    const parentId = tree[i].pid;
    if (tree[parentId]) {
      if (!tree[parentId].children) tree[parentId].children = []
      tree[parentId].children.push(tree[i])
    } else {
      treeData.push(tree[i])
    }
  }

  return treeData;
}

/**
 * example
 */
const list = [
  {
    id: 1,
    name: 'p1',
  },
  {
    id: 2,
    name: 'c1',
    pid: 1,
  },
  {
    id: 3,
    name: 'g1',
    pid: 2
  }
];
console.log(JSON.stringify(listToTree(list), null, 2));
