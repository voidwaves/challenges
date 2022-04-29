
// in what order are the log statements printed?

console.log('a')

Promise.resolve().then(() => console.log('b'))

console.log('c')

setTimeout(() => console.log('d'))

console.log('e')
