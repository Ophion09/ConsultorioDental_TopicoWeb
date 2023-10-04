const Sequelize = require('sequelize').Sequelize;
const MedicalrecordsProcedures = require('../models/medicalnotesProceduresModel')

//agregar relacion entre notas medicas y procedimientos
exports.addMedicalnotesProcedures = async (id_notes, id_procedures) =>{
    try {
       const result = await MedicalrecordsProcedures.create({
           id_notas: id_notes,
           id_procedimiento: id_procedures
        })
    }catch(err){
       throw err; 
    }
}

//obtener notas medicas y procedimientos relacionados
exports.getMedicalrecordsProcedures = async () => {
    try {
        const medicalrecordsProcedures = await MedicalrecordsProcedures.findAll(); 
        return medicalrecordsProcedures;
    } catch (err) {
        throw err; 
    }
 }

 //obtener notas medicas y procedimientos relacionados por id
 exports.getMedicalrecordsProceduresById = async (id) => {
    try {
        const medicalrecordsProcedures = await MedicalrecordsProcedures.findByPk(id); 
        return medicalrecordsProcedures;
    } catch (err) {
        throw err; 
    }
 }

  //obtener notas medicas y procedimientos relacionados por id de las notas
 exports.getMedicalrecordsProceduresByIdNotes = async (id) => {
    try {
        const medicalrecordsProcedures = await MedicalrecordsProcedures.findAll({
            where: {
                id_notas: id
            }
        }); 
        return medicalrecordsProcedures;
    } catch (err) {
        throw err; 
    }
 }

   //obtener notas medicas y procedimientos relacionados por id de los procedimientos
   exports.getMedicalrecordsProceduresByIdProcedures = async (id) => {
    try {
        const medicalrecordsProcedures = await MedicalrecordsProcedures.findAll({
            where: {
                id_procedimiento: id
            }
        }); 
        return medicalrecordsProcedures;
    } catch (err) {
        throw err; 
    }
 }

 //eliminar notas medicas y procedimientos relacionados
 exports.deleteMedicalrecordsProcedures = async (id) => {
    try{
      const deleted =  await MedicalrecordsProcedures.destroy({
          where: {
            id_nota_procedimiento:id
          }
       })
       return deleted;
    }catch(err){
       throw err;
    }
}

 //eliminar notas medicas y procedimientos relacionados por id de las notas
 exports.deleteMedicalrecordsProceduresByIdNotes = async (id) => {
    try{
      const deleted =  await MedicalrecordsProcedures.destroy({
          where: {
            id_notas: id
          }
       })
       return deleted;
    }catch(err){
       throw err;
    }
}

 //eliminar notas medicas y procedimientos relacionados por id de los procedimientos
 exports.deleteMedicalrecordsProceduresByIdProcedures = async (id) => {
    try{
      const deleted =  await MedicalrecordsProcedures.destroy({
          where: {
            id_procedimiento: id
          }
       })
       return deleted;
    }catch(err){
       throw err;
    }
}

//actualizar notas medicas y procedimientos relacionados
exports.updateMedicalrecordsProcedures = async (id, newValues) => {
    try {
        const  medicalrecordsProceduresUpdapted = await MedicalrecordsProcedures.update(newValues, {
            where: {
                id_nota_procedimiento:id
            }
        });
        return medicalrecordsProceduresUpdapted;
    } catch (err) {
        throw err;
    }
}