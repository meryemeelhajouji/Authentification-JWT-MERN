const express = require('express')
const router = express.Router()
const {verify} = require('../Middlewares/verification ')

const {getUserManager} = require('../Controllers/managerContriller')

router.get("/manager/me",verify(['Manager']) ,getUserManager)

module.exports = router