function inherit(Sub, Sup) {
  Sub.prototype = Object.create(Sup.prototype)
  Sub.prototype.constructor = Sub
}

/**
 * example
 */
function Sup(grade) {
  this.grade = grade
}

Sup.prototype.sayGrade = function () {
  console.log(this.grade)
}

function Sub(name, grade) {
  Sup.call(this, grade)
  this.name = name
}

inherit(Sub, Sup)

const sub = new Sub('xiao ming', '三年八班')
console.log(sub.name, sub.grade);
sub.sayGrade()
console.log(sub.__proto__);
console.log(sub.__proto__.__proto__);