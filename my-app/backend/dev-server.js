
require('module-alias/register')
require('express-async-errors')

const express = require('express')
const app = express()

app.use('/api', require('../server'))

const PORT = process.env.PORT || 8001

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend listening on port ${PORT}`)
})
