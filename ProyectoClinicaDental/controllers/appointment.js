// AppointmentController
const Sequelize = require("sequelize").Sequelize;
const appointmentModel = require("../models/appointment");
const userController = require('./user');

// Add appointment
exports.addAppointment = async (req, res) => {
  try {
    const answer = await appointmentModel.create(req.body);
    res.status(201).json({
      status: 'succes'
     });
  } catch (err) {
    res.send(err);
  }
};

//Get appointment
exports.getAppointmentById = async (id) => {
  const appointment = await appointmentModel.findOne({ where: { id_appointment: id } });
  if (appointment === null) {
    console.log("Not Found!");
  } else {
    const idUsuario = appointment.id_user;
    console.log(idUsuario);
    userController.getUserById(idUsuario);
  }
};

// Trea todos los appointment
exports.getAppointments = async () => {
  try {
     const result = await appointmentModel.findAll();
     console.log(JSON.stringify(result, null, 2))
  } catch (error) {
     console.log(error);
  }
}


// Recibe de parametros el id a modificar, y un objeto con la informacion a actualizar
// Update appointment
exports.updateAppointment = async (id, updatedData) => {
    try {
        // Utiliza el método 'update' para actualizar los datos del empleado
        const [rowsUpdated] = await appointmentModel.update(updatedData, {
            where: { id_appointment: id },
        });

        if (rowsUpdated === 0) {
            console.log('No se encontró la cita para actualizar.');
        } else {
            console.log(`Cita con ID ${id} actualizado exitosamente.`);
        }
    } catch (error) {
        console.log('Error al actualizar la cita:', error);
    }
}


// Delete appointment
exports.deleteAppointment = async (id) => {
  try {
    const appointmentDelete = await appointmentModel.destroy({
      where: { id_appointment: id },
    });
    console.log(appointmentDelete);
  } catch (error) {
    console.log(error);
  }
};