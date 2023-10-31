 // EmpleadoController
const Sequelize = require("sequelize").Sequelize;
const employeeModel = require("../models/employee");
const roleController = require("./role");

// Add employee
exports.addEmployee = async (req, res) => {
  try {
    const answer = await employeeModel.create(req.body);
    res.status(201).json({
     status: 'succes'
    })
 } catch (err) {
    res.status(400).json({
       status: 'fail',
       message: err
    });
}
};

//Get employee
exports.getEmployeeById = async (req, res) => {
  const { id } = req.params;
    try {
        const employeeCreated = await employeeModel.findByPk(id); 
        res.send(employeeCreated);
    } catch (error) {
        res.send(error);
    }
};

// Trea todos los empleados
exports.getEmployees = async (req, res) => {
  try {
    const employees = await employeeModel.findAll(); 
    res.send(employees)
} catch (error) {
    res.send(error) 
}
}

// // Funcion para obtener el nombre del rol en base su id
// exports.getUserRoleEmployee = async (req, res) => {
//   const employee = await employeeModel.findOne({ where: { id_employee: id } });
//   if (employee === null) {
//     console.log("Not Found!");
//   } else {
//     const answer = employee.id_userRole;
//     // Llama a las funciones exportadas desde rol.js
//     const result = await roleController.getRol(answer);
//     console.log(result);
//   }
// };


// Recibe de parametros el id a modificar, y un objeto con la informacion a actualizar
// Update Employee
exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  try {
      const employeeUpdate = await employeeModel.update(req.body, {
          where: {
              id_employee:id
          }
      });
      res.status(201).json({
          status: 'succes'
      })
  } catch (error) {
      res.status(400).json({
          status: 'fail',
          message: error
      });
  }
}


// Delete Employee
exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;
    try{
      const deleted =  await employeeModel.destroy({
          where: {
            id_employee:id
          }
       })
       res.status(201).json({
        status: 'succes'
       })
    }catch(error){
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
};

// exports.updateEmployeeIdSpecialty = async (id, updatedData) => {
//   try {
//       // Utiliza el método 'update' para actualizar los datos del empleado
//       const [rowsUpdated] = await employeeModel.update(updatedData, {
//           where: { id_employee: id },
//       });

//       if (rowsUpdated === 0) {
//           console.log('No se encontró el empleado para actualizar.');
//       } else {
//           console.log(`Empleado con ID ${id} actualizado exitosamente.`);
//       }
//   } catch (error) {
//       console.log('Error al actualizar el empleado:', error);
//   }
// }
