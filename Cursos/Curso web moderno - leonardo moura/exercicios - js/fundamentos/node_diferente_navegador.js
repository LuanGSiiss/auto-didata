let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a) // undefined
console.log(global.b) // 123
console.log(this.c) // 456
console.log(module.exports.c) // 456
console.log(module.exports === this) // true
console.log(module.exports) // { c: 456, d: false, e: 'teste' }
