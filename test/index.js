const micro = require('micro')
const test = require('ava')
const listen = require('test-listen')
const request = require('request-promise')

const response = require('../src')

test('my endpoint', async t => {
  const service = micro(async (req, res) => {
    micro.send(res, 200, response())
  })

  const url = await listen(service)
  const body = await request(url)

  t.deepEqual(body, `build: ${new Date().toUTCString()}`)
  service.close()
})
