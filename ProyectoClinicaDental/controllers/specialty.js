const Sequelize = require('sequelize').Sequelize;
//Assigment of the User Model to the controller 
const specialtyModel = require('../models/specialty.js');

// Método para agregar un rol de forma asíncrona
exports.addSpecialty = async (name) => {
    try {
      const answer = await specialtyModel.create({
        name: name,
      });
    } catch (err) {
      console.log(err);
    }
  }

  exports.getSpecialty = async () => {
    try {
       const result = await specialtyModel.findAll();
       console.log(JSON.stringify(result, null, 2))
    } catch (error) {
       console.log(error);
    }
  }

  // Método para obtener un rol por su ID
  exports.getSpecialtyById = async (id) => {
    const userSpecialty = await specialtyModel.findOne({ where: { id_userSpecialty: id } });
    if (userSpecialty === null) {
      console.log('Not Found!');
    } else {
      console.log(userSpecialty.name);
    }
  }

  // Metodo para Actualizar nombre de rol por medio del id
  exports.updateSpecialty = async (id, updatedData) => {
    try {
        // Utiliza el método 'update' para actualizar los datos del empleado
        const [rowsUpdated] = await specialtyModel.update(updatedData, {
            where: { id_userSpecialty: id },
        });

        if (rowsUpdated === 0) {
            console.log('No se encontró el especialidad para actualizar.');
        } else {
            console.log(`Especialidad con ID ${id} actualizado exitosamente.`);
        }
    } catch (error) {
        console.log('Error al actualizar el especialidad:', error);
    }
}

exports.deleteSpecialty = async (id) => {
    try {
      const specialtyDelete = await specialtyModel.destroy({
        where: { id_userSpecialty: id },
      });
      console.log(specialtyDelete);
    } catch (error) {
      console.log(error);
    }
  };