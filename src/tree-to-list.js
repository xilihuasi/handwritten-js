function treeToList(data) {
  const list = [];
  function dfs(tree) {
    tree.forEach((node) => {
      list.push(node);
      if (node.children) {
        dfs(node.children);
        delete node.children;
      }
    });
  }
  dfs(data);
  return list;
}

/**
 * example
 */
const tree = [
  {
    id: 1,
    name: 'p1',
    children: [
      {
        id: 2,
        name: 'c1',
        children: [
          {
            id: 3,
            name: 'g1'
          }
        ]
      }
    ],
  },
];
console.log(treeToList(tree));
