const express = require('express')
const router = express.Router();
const userController = require("../controllers/UserController");
const validationUtil = require('../utils/ValidationUtil');

// router.post('/login', validationUtil.loginValidation, userController.login)

router.get('', userController.getUsers)
// router.get('/users/:id', userController.getUserById)
// router.post('/users', validationUtil.bodyUserValidation, userController.create)
// router.put('/users/:id', [validationUtil.idUserValidation, validationUtil.bodyUserValidation], userController.update)

module.exports = router;