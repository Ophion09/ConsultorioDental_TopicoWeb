// employee.js routes
const express = require('express');
const employeeController = require('../controllers/employee.js');
const employeeModel = require('../models/employee.js');

const router = express.Router();

router
.route('/')
.get(employeeController.getEmployees)
.post(employeeController.addEmployee);

router
.route('/:id')
.get(employeeController.getEmployeeById)
.delete(employeeController.deleteEmployee)
.patch(employeeController.updateEmployee);


module.exports = router;