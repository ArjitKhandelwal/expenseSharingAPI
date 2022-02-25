const express = require('express')
const router = express.Router()
const config = require('../config.json')
const getUrlPrefix = config.app.prefix

const getBalances = require('../controller/getBalances.js').getBalances

router.post(getUrlPrefix + '/getBalances' , getBalances )