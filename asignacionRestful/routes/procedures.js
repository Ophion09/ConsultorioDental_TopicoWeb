// routes/procedures.js

const express = require('express');
const proceduresController = require('../controllers/procedures.js');

const router = express.Router();

router.route('/')
  .get(proceduresController.getAllProcedures)
  .post(proceduresController.createProcedure);

router.route('/:id')
  .get(proceduresController.getProcedureById)
  .delete(proceduresController.deleteProcedure)
  .patch(proceduresController.updateProcedure);

module.exports = router;
