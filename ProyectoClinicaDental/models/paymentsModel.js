const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

//Payments Model 

const Payments = sequelize.define('pagos', {
    id_pago: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
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
}, { timestamps: false });

module.exports = Payments; 