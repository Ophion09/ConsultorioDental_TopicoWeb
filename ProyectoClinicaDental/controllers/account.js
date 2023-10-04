const Sequelize = require('sequelize').Sequelize;
const Account = require('../models/account')

//agregar cuenta
exports.addAccount = async (id_patient, debt) =>{
    try {
       const result = await Account.create({
           id_paciente: id_patient,
           adeudo: debt
        })
    }catch(err){
       throw err; 
    }
}

//obtener cuentas
exports.getAccounts = async () => {
    try {
        const accounts = await Account.findAll(); 
        return accounts;
    } catch (err) {
        throw err; 
    }
 }

 //obetener cuenta por id
exports.getAccountsById = async (id) => {
    try {
        const accounts = await Account.findByPk(id); 
        return accounts;
    } catch (err) {
        throw err; 
    }
 }

 //Obtener cuenta por paciente
 exports.getAccountsByIdPatient = async (id) => {
    try {
        const accounts = await Account.findAll({
            where: {
                id_paciente: id
            }
        });
        return accounts;
    } catch (err) {
        throw err; 
    }
 }

 //elimina cuenta
 exports.deleteAccount = async (id) => {
    try {
        const deleted = await Account.destroy({
            where: {
                id_cuenta: id
            }
        });
        return deleted;
    } catch (err) {
        throw err; 
    }
 }

 //elimina cuenta por paciente
 exports.deleteAccountByIdPatient = async (id) => {
    try {
        const deleted = await Account.destroy({
            where: {
                id_paciente: id
            }
        });
        return deleted;
    } catch (err) {
        throw err; 
    }
 }

  //actualizar cuentas
  exports.updateAccount = async (id, newValues) => {
    try {
        const  accountUpdapted = await Account.update(newValues, {
            where: {
                id_cuenta:id
            }
        });
        return accountUpdapted;
    } catch (err) {
        throw err;
    }
}