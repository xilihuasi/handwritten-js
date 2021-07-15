function render(template, data) {
  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, key) => data[key])
}

const template = `我是{{ name }}，今年 {{ age }} 岁。`;
const data = {
  name: '张三',
  age: 18
}

console.log(render(template, data));