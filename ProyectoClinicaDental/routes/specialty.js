// role.js routes
const express = require('express');
const specialtyController = require('../controllers/specialty.js');
const specialtyModel = require('../models/specialty.js');

const router = express.Router();

router
.route('/')
.get(specialtyController.getSpecialty)
.post(specialtyController.addSpecialty);

router
.route('/:id')
.get(specialtyController.getSpecialtyById)
.delete(specialtyController.deleteSpecialty)
.patch(specialtyController.updateSpecialty);


module.exports = router;