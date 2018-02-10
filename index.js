const foo = Date.now()
const bar = foo.toString()
const x = new Date(+bar).toUTCString()

module.exports = () => `build: ${x}`
