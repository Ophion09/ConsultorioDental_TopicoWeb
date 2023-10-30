// user.js routes
const express = require('express');
const userController = require('../controllers/user.js');
const userModel = require('../models/user.js');
const authController = require('../controllers/auth.js');

const router = express.Router();

router.use(authController.authorizeUser);
router
.route('/')
.get(userController.getUsers)
.post(userController.addUser);

router
.route('/:id')
.get(userController.getUserById)
.delete(userController.deleteUser)
.patch(userController.updateUser);


module.exports = router;