const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})

//@Add User  @route POST /adduser

router.post('/adduser',actions.addNew)

//@Authenticate User  @route POST /authenticate

router.post('/authenticate',actions.authenticate)

//@Get info User  @route POST /getinfo
router.get('/getinfo',actions.getinfo)

module.exports = router