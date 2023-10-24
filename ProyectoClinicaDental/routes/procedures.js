// procedures.js routes
const express = require('express');
const procedureController = require('../controllers/procedures.js');
const proceduresModel = require('../models/procedures.js');

const router = express.Router();


router
.route('/')
.get(procedureController.getAllProcedures)
.post(procedureController.addProcedures);


router
.route('/:id')
.get(procedureController.getProcedureById)
.delete(procedureController.deleteProcedure)
.patch(procedureController.updateProcedure);

module.exports = router;
