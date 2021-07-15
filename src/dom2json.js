function dom2json(domtree) {
  const obj = {}
  obj.tag = domtree.tagName;
  obj.children = []
  domtree.childNodes.forEach(dom => {
    obj.children.push(dom2json(dom))
  });
  return obj
}

/**
 * example
 */
const div = document.createElement('div');
const span = document.createElement('span');
const a = document.createElement('a');
span.appendChild(a);
div.appendChild(span);
console.log(dom2json(div))