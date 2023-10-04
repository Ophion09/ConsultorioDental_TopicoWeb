const Sequelize = require('sequelize').Sequelize;
const Payments = require('../models/payments')

//agregar pago
exports.addPayment = async ( id_payment , id_patient, payment_amount, payment_date) =>{
    try {
       const result = await Payments.create({
           id_pago: id_payment,
           id_paciente: id_patient,
           monto_pago: payment_amount,
           fecha_pago: payment_date 
        })
    }catch(err){
       throw err; 
    }
}

//obetener todos los pagos
exports.getPayment = async () => {
    try {
        const payments = await Payments.findAll(); 
        return payments;
    } catch (err) {
        throw err; 
    }
 }

 //obtener pago por id
 exports.getPaymentById = async (id) => {
    try {
        const Payment = await Payments.findByPk(id); 
        return Payment;
    } catch (err) {
        throw err; 
    }
}

//obetener todos los pagos de un paciente
exports.getPaymentsByIdPaciente = async (id) => {
    try {
        const Payments = await Payments.findOne({
            where: {
              id_paciente: id
            }
        });
        return Payments;
    } catch (err) {
        throw err; 
    }
 }

 //obtener los pagos por fecha
 exports.getPaymentsByDate = async (date) => {
    try {
        const Payments = await Payments.findOne({
            where: {
              fecha_pago: date
            }
        });
        return Payments;
    } catch (err) {
        throw err; 
    }
 }

 //obtener los pagos por fecha y usuario
 exports.getPaymentsByDateAndIdUser = async (id, date) => {
    try {
        const Payments = await Payments.findOne({
            where: {
              id_paciente: id,
              fecha_pago: date
            }
        });
        return Payments;
    } catch (err) {
        throw err; 
    }
 }

//eliminar pago
exports.deletePayment = async (id) => {
    try{
      const deleted =  await Payments.destroy({
          where: {
             id_pago:id
          }
       })
       return deleted;
    }catch(err){
       throw err;
    }
}

//eliminar pago por paciente
exports.deletePaymentByIdPatient = async (id) => {
    try{
      const deleted =  await Payments.destroy({
          where: {
             id_paciente:id
          }
       })
       return deleted;
    }catch(err){
       throw err;
    }
}

//acatulizar pago
exports.updatePayment = async (id, newValues) => {
    try {
        const  paymentUpdapted = await Payments.update(newValues, {
            where: {
                id_pago:id
            }
        });
        return paymentUpdapted;
    } catch (err) {
        throw err;
    }
}