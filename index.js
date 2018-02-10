const foo = Date.now()
const bar = foo.toString()
const x = new Date(+bar)

module.exports = () => x
