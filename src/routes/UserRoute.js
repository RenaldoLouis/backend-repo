const express = require('express')
const router = express.Router();
const userController = require("../controllers/UserController");
const validationUtil = require('../utils/ValidationUtil');

// router.post('/login', validationUtil.loginValidation, userController.login)

router.get('/fetch-user-data', userController.getUsers)
router.post('/create-user-data', validationUtil.bodyUserValidation, userController.create)
router.put('/update-user-data/:id', validationUtil.bodyUserValidation, userController.update)

module.exports = router;