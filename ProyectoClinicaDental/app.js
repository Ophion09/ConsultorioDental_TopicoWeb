// App.js
const sequelize = require('./utils/db');
const userRole = require('./controllers/rol');
const userSpecialty = require('./controllers/especialidad');
const employee = require('./controllers/employee');

// // Llamada para actualizar un empleado con ID 1 y nuevos datos
// const updatedData = {
//     name: 'PEPE2',
//     licenseNumber: '789',
//     age: 30,
//     // ... otros campos que deseas actualizar
// };

// employee.updateEmployee(1, updatedData);

//empleado.addEmpleado('HolaMundo', 123, 24, 2, 1);
// rol.getRol(1);
 // empleado.getUserRoleEmployee(3);


 // Eliminar empleado por id
//  employee.deleteEmployee(3);

//userRole.getRol(3);


// userSpecialty.getSpecialty(3);
// const data = {
//     name: 'cambio'
// };
// userSpecialty.updateSpecialty(3, Data);
// userSpecialty.deleteSpecialty(3);

// employee.addEmployee('Prueba', 544, 60, 1, 2); // id = 15
// const data = {
//     name: 'Oscar',
//     age: 29
// };
// employee.updateEmployee(15, data);
// employee.getEmployee(15);
employee.getUserRoleEmployee(15);
