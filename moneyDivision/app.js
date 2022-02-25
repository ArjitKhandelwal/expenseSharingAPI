const express = require('express')
const path = require('path')
const indexRouter = require('./router/index.js')
const getUrlPrefix = config.app.prefix
const app = express()
global.config = require('./config.json')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/',indexRouter)

const port = config.server.port
const server = app.listen(port)
console.log('API running on port', port)

module.exports = app