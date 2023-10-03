const Sequelize = require('sequelize').Sequelize;
const Patients = require('../models/patientsModel')

//agregar paciente
exports.addPatients = async (name, lastname, age, cellphone, address, id_user, sexo) =>{
    try {
       const result = await Patients.create({
           nombre: name,
           apellido: lastname,
           edad: age,
           celular: cellphone,
           direccion: address,
           id_usuario: id_user,
           sexo: sexo
        })
    }catch(err){
       throw err; 
    }
}

//obtener pacientes
exports.getPatients = async () => {
    try {
        const patients = await Patients.findAll(); 
        return patients;
    } catch (err) {
        throw err; 
    }
 }

 //obtener paciente por id
exports.getPatientById = async (id) => {
    try {
        const patient = await Patients.findByPk(id); 
        return patient;
    } catch (err) {
        throw err; 
    }
}

//obtener procedimiento por nombre
exports.getPatientByName = async (name) => {
    try {
        const patient = await Patients.findOne({
            where: {
              nombre: name
            }
        });
        return patient;
    } catch (err) {
        throw err; 
    }
 }

 //obetener paciente por id de usuario
 exports.getPatientByIdUser = async (id) => {
    try {
        const patient = await Patients.findOne({
            where: {
              id_usuario: id
            }
        });
        return patient;
    } catch (err) {
        throw err; 
    }
 }

  //eliminar paciente
exports.deletePatient = async (id) => {
    try{
      const deleted =  await Patients.destroy({
          where: {
             id_paciente:id
          }
       })
       return deleted;
    }catch(err){
       throw err;
    }
}

  //eliminar paciente por nombre
  exports.deletePatientByName = async (name) => {
    try{
      const deleted =  await Patients.destroy({
          where: {
             nombre:name
          }
       })
       return deleted;
    }catch(err){
       throw err;
    }
}
//eliminar paciente por id usuario
exports.deletePatientByIdUser = async (id) => {
    try{
      const deleted =  await Patients.destroy({
          where: {
             id_usuario:id
          }
       })
       return deleted;
    }catch(err){
       throw err;
    }
}

//actualizar paciente
exports.updatePatient = async (id, newValues) => {
    try {
        const  patientUpdapted = await Patients.update(newValues, {
            where: {
                id_usuario:id
            }
        });
        return patientUpdapted;
    } catch (err) {
        throw err;
    }
}