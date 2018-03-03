/* global fetch */

const micro = require('micro')
const test = require('ava')
const listen = require('test-listen')

require('isomorphic-fetch')

const response = require('../src')

test('my endpoint', async t => {
  const service = micro(async (req, res) => {
    micro.send(res, 200, response())
  })

  const url = await listen(service)
  const body = await fetch(url)
    .then(res => res.text())
    .then(body => body)

  t.deepEqual(body, `build: ${new Date().toUTCString()}`)
  service.close()
})
