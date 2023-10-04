const Sequelize = require('sequelize');
const sequelize = require('../utils/db');
const patients = require('./patients');

//Payments

const payments = sequelize.define('pagos', {
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
}, {tableName:'pagos',
    timestamps: false });

payments.belongsTo(patients, { foreignKey: 'id_paciente', as: 'patient'});

module.exports = payments; 