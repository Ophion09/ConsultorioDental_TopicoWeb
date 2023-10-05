const Sequelize = require('sequelize').Sequelize;
const userRole = require('../models/rol');
//Assigment of the User Model to the controller 
const roleModel = require('../models/rol');


// Método para agregar un rol de forma asíncrona
exports.addRol = async (name) => {
    try {
      const answer = await roleModel.create({name});
    } catch (err) {
      console.log(err);
    }
  }

  // Método para obtener un rol por su ID
  exports.getRol = async (id) => {
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