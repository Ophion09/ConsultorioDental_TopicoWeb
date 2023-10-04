const Sequelize = require('sequelize').Sequelize;
const MedicalRecords = require('../models/medicalRecords')

//agregar historial clinico
exports.addMedicalRecord = async (allergies, procedures, others, id_patient) =>{
    try {
       const result = await Patients.create({
           alergias: allergies,
           procedimientos: procedures,
           otros: others,
           id_paciente: id_patient
        })
    }catch(err){
       throw err; 
    }
}

//obtener historial clinico
exports.getMedicalRecord = async () => {
    try {
        const medicalRecords = await MedicalRecords.findAll(); 
        return medicalRecords;
    } catch (err) {
        throw err; 
    }
 }

//obtener historial clinico por id
exports.getMedicalRecordById = async (id) => {
    try {
        const medicalRecord = await MedicalRecords.findByPk(id); 
        return medicalRecord;
    } catch (err) {
        throw err; 
    }
 }

 //obtener historial clinico por paciente
exports.getMedicalRecordByIdPatient = async (id) => {
    try {
        const medicalRecord = await MedicalRecords.findOne({
            where: {
              id_paciente: id
            }
        });
        return medicalRecord;
    } catch (err) {
        throw err; 
    }
 }

 //eliminar historial clinico
 exports.deleteMedicalRecord = async (id) => {
    try{
      const deleted =  await MedicalRecords.destroy({
          where: {
             id_historial:id
          }
       })
       return deleted;
    }catch(err){
       throw err;
    }
}

 //eliminar historial por paciente
 exports.deleteMedicalRecordByIdPatient = async (id) => {
    try{
      const deleted =  await MedicalRecords.destroy({
          where: {
             id_paciente:id
          }
       })
       return deleted;
    }catch(err){
       throw err;
    }
}

//actualizar historial
exports.updateMedicalRecord = async (id, newValues) => {
    try {
        const  medicalRecordUpdapted = await MedicalRecords.update(newValues, {
            where: {
                id_historial:id
            }
        });
        return medicalRecordUpdapted;
    } catch (err) {
        throw err;
    }
}


