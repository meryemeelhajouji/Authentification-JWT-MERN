const express = require('express')
const router = express.Router()

const {getUserManager} = require('../Controllers/managerContriller')

router.get("/manager/me",getUserManager)


module.exports = router