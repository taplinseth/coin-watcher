const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()

router.get('/', usersController.getAllUsers)

router.get('/:id', usersController.getUserById)

router.post('/', checkJWt, usersController.createUser)

router.put('/:id', checkJwt, usersController.updateUserById)

module.exports = router