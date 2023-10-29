// role.js routes
const express = require('express');
const roleController = require('../controllers/role.js');
const roleModel = require('../models/role.js');

const router = express.Router();

router
.route('/')
.get(roleController.getRoles)
.post(roleController.addRole);

router
.route('/:id')
.get(roleController.getRoleById)
.delete(roleController.deleteRole)
.patch(roleController.updateRole);


module.exports = router;