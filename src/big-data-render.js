const ul = document.getElementById('list')

const total = 1000000;
const size = 20;
const page = total / size;
let index = 0;

function loop(curTotal, curIndex) {
  if (curTotal <= 0) {
    return false;
  }

  const pageCount = Math.min(curTotal, size);
  window.requestAnimationFrame(function () {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < pageCount; i++) {
      const li = document.createElement('li');
      li.innerText = curIndex + i + ' : ' + ~~(Math.random() * total);
      fragment.appendChild(li);
    }
    ul.appendChild(fragment);
    loop(curTotal - pageCount, curIndex + pageCount)
  })

  loop(total, index)
}