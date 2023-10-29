const Sequelize = require('sequelize').Sequelize;
//Assigment of the User Model to the controller 
const roleModel = require('../models/role');


// Método para agregar un rol de forma asíncrona
exports.addRole = async (req, res) => {
    try {
      const answer = await roleModel.create(req.body);
      res.status(201).json({
        status: 'succes'
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
     });
    }
  }

  exports.getRoles = async (req, res) => {
    try {
       const roles = await roleModel.findAll();
       res.send(roles);
    } catch (error) {
       res.send(error);
    }
  }

  // Método para obtener un rol por su ID
  exports.getRoleById = async (id) => {
    const userRole = await roleModel.findOne({ where: { id_userRole: id } });
    if (userRole === null) {
      console.log('Not Found!');
    } else {
      console.log(userRole.name);
    }
  }

  // Metodo para Actualizar nombre de rol por medio del id
  exports.updateRole = async (id, updatedData) => {
    try {
        // Utiliza el método 'update' para actualizar los datos del empleado
        const [rowsUpdated] = await roleModel.update(updatedData, {
            where: { id_userRole: id },
        });

        if (rowsUpdated === 0) {
            console.log('No se encontró el rol para actualizar.');
        } else {
            console.log(`Rol con ID ${id} actualizado exitosamente.`);
        }
    } catch (error) {
        console.log('Error al actualizar el rol:', error);
    }
}

exports.deleteRole = async (id) => {
    try {
      const roleDelete = await roleModel.destroy({
        where: { id_userRole: id },
      });
      console.log(roleDelete);
    } catch (error) {
      console.log(error);
    }
  };