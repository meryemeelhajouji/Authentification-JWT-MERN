const express = require('express')
const router = express.Router()

const {getUserClient} = require('../Controllers/clientController')

router.get("/client/me",getUserClient)


module.exports = router