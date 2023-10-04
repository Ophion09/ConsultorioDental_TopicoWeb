const Sequelize = require('sequelize').Sequelize;
const MedicalNotes = require('../models/medicalNotes')

//agregar notas medicas
exports.addMedicalNotes = async (note, id_procedures, id_appointment, id_patient, id_employee) =>{
    try {
       const result = await MedicalrecordsProcedures.create({
           nota: note,
           id_procedimiento: id_procedures,
           id_cita: id_appointment,
           id_paciente: id_patient,
           id_empleado: id_employee
        })
    }catch(err){
       throw err; 
    }
}

//obtener notas medicas
exports.getMedicalNotes= async () => {
    try {
        const medicalNotes = await MedicalNotes.findAll(); 
        return medicalNotes;
    } catch (err) {
        throw err; 
    }
 }

 //obtener notas medicas por id
exports.getMedicalNotesById= async (id) => {
    try {
        const medicalNotes = await MedicalNotes.findByPk(id); 
        return medicalNotes;
    } catch (err) {
        throw err; 
    }
 }

 //obtener notas medicas por el procedimiento
 exports.getMedicalNotesByIdProcedure= async (id) => {
    try {
        const medicalNotes = await MedicalNotes.findAll({
            where: {
                id_procedimiento: id
            }
        });
        return medicalNotes;
    } catch (err) {
        throw err; 
    }
 }

  //obtener notas medicas por la cita
  exports.getMedicalNotesByIdAppointment= async (id) => {
    try {
        const medicalNotes = await MedicalNotes.findAll({
            where: {
                id_cita: id
            }
        });
        return medicalNotes;
    } catch (err) {
        throw err; 
    }
 }
 
   //obtener notas medicas por paciente
   exports.getMedicalNotesByIdPatient= async (id) => {
    try {
        const medicalNotes = await MedicalNotes.findAll({
            where: {
                id_paciente: id
            }
        });
        return medicalNotes;
    } catch (err) {
        throw err; 
    }
 }

    //obtener notas medicas por empleado
    exports.getMedicalNotesByIdEmployee= async (id) => {
        try {
            const medicalNotes = await MedicalNotes.findAll({
                where: {
                    id_empleado: id
                }
            });
            return medicalNotes;
        } catch (err) {
            throw err; 
        }
     }

 //eliminar notas medicas
 exports.deleteMedicalNotes= async (id) => {
    try {
        const deleted = await MedicalNotes.destroy({
            where: {
                id_nota: id
            }
        });
        return deleted;
    } catch (err) {
        throw err; 
    }
 }

 //eliminar notas medicas por procedimiento
 exports.deleteMedicalNotesByIdProcedure= async (id) => {
    try {
        const deleted = await MedicalNotes.destroy({
            where: {
                id_procedimiento: id
            }
        });
        return deleted;
    } catch (err) {
        throw err; 
    }
 }

  //eliminar notas medicas por la cita
  exports.deleteMedicalNotesByIdAppointment= async (id) => {
    try {
        const deleted = await MedicalNotes.destroy({
            where: {
                id_cita: id
            }
        });
        return deleted;
    } catch (err) {
        throw err; 
    }
 }

   //eliminar notas medicas por paciente
   exports.deleteMedicalNotesByIdPatient= async (id) => {
    try {
        const deleted = await MedicalNotes.destroy({
            where: {
                id_paciente: id
            }
        });
        return deleted;
    } catch (err) {
        throw err; 
    }
 }

 //actualizar notas medicas
 exports.updateMedicalNotes = async (id, newValues) => {
    try {
        const  medicalNotesUpdapted = await MedicalNotes.update(newValues, {
            where: {
                id_nota:id
            }
        });
        return medicalNotesUpdapted;
    } catch (err) {
        throw err;
    }
}