const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

//Payments Model 

const Payments = sequelize.define('pagos', {
    id_pago: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true
    },
    id_paciente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'pacientes', 
            key: 'id_paciente' 
        }
    },
    monto_pago: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    fecha_pago: {
        type: Sequelize.DATE,
        allowNull: false
    },
})

module.exports = Payments; 