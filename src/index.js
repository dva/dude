const foo = Date.now()
const bar = foo.toString()

const x = new Date(+bar).toUTCString()
const y = `build: ${x}`

module.exports = () => y
