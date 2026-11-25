const test = require('node:test')
const assert = require('node:assert/strict')

require('module-alias/register')
require('express-async-errors')

const app = require('../server')

test('messages API works', async (t) => {
  const server = app.listen(0)

  await new Promise((resolve) => {
    server.once('listening', resolve)
  })

  t.after(() => {
    server.close()
  })

  const { port } = server.address()
  const baseUrl = `http://127.0.0.1:${port}`

  await t.test('GET /messages returns an array', async () => {
    const response = await fetch(`${baseUrl}/messages`)
    const body = await response.json()

    assert.equal(response.status, 200)
    assert.equal(Array.isArray(body), true)
  })

  await t.test('POST /messages creates a message', async () => {
    const response = await fetch(`${baseUrl}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Pipeline test message',
      }),
    })

    const body = await response.json()

    assert.equal(response.status, 200)
    assert.equal(body.body, 'Pipeline test message')
    assert.equal(typeof body.id, 'number')
  })

  await t.test('POST /messages rejects an empty message', async () => {
    const response = await fetch(`${baseUrl}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })

    const body = await response.json()

    assert.equal(response.status, 400)
    assert.equal(body.error, 'Message is required')
  })
})
