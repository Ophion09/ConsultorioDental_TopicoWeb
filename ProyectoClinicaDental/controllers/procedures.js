const Sequelize = require('sequelize').Sequelize;
const Procedures = require('../models/procedures')

//agregar procedimientos
exports.addProcedures = async (nombre, precio) =>{
    try {
       const result = await Procedures.create({
           nombre: nombre,
           precio: precio
        })
    }catch(err){
       throw err; 
    }
}

//agregar procedimientos con descuentos
exports.addProceduresWithDiscounts = async (nombre, precio, descuento) =>{
    try {
       const result = await Procedures.create({
           nombre: nombre,
           precio: precio,
           descuento: descuento
        })
    }catch(err){
       throw err; 
    }
}

//agregar descuentos
exports.addDiscounts = async (id, discount) =>{
    const newValues = {
        descuento: discount
    };
    try {
        const desicountAdded = await Procedures.update(newValues, {
            where: {
                id_procedimiento:id
            }
        });
        return desicountAdded;
    }catch(err){
       throw err; 
    }
}

//obtener procedimientos
exports.getProcedures = async () => {
    try {
        const procedures = await Procedures.findAll(); 
        return procedures;
    } catch (err) {
        throw err; 
    }
 }

//obtener procedimiento por id
exports.getProcedureById = async (id) => {
    try {
        const procedures = await Procedures.findByPk(id); 
        return procedures;
    } catch (err) {
        throw err; 
    }
}

//obtener procedimiento por nombre
exports.getProcedureByName = async (name) => {
    try {
        const procedure = await Procedures.findOne({
            where: {
              nombre: name
            }
        });
        return procedure;
    } catch (err) {
        throw err; 
    }
 }

 //eliminar procedimiento
exports.deleteProcedure = async (id) => {
    try{
      const deleted =  await Procedures.destroy({
          where: {
             id_procedimiento:id
          }
       })
       return deleted;
    }catch(err){
       throw err;
    }
}

 //eliminar procedimiento por nombre
exports.deleteProcedureByName = async (name) => {
    try{
      const deleted =  await Procedures.destroy({
          where: {
             nombre:name
          }
       })
       return deleted;
    }catch(err){
       throw err;
    }
}

 //eliminar solo la promocion
 exports.deleteDiscuount = async (id) => {
    const newValues = {
        descuento: null
    };
    try{
        const  deleted = await Procedures.update(newValues, {
            where: {
                id_procedimiento:id
            }
        });
       return deleted;
    }catch(err){
       throw err;
    }
}

//actualizar procedimiento
exports.updateProcedure = async (id, newValues) => {
    try {
        const  procedureUpdapted = await Procedures.update(newValues, {
            where: {
                id_procedimiento:id
            }
        });
        return procedureUpdapted;
    } catch (err) {
        throw err;
    }
}

