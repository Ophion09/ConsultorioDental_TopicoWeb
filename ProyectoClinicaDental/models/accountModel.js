const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

//cuentas modelo

const account = sequelize.define('cuentas', {
    id_cuenta: {
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
    adeudo: {
        type: Sequelize.DECIMAL(10.2),
        allowNull: false
    }
}, { timestamps: false });

module.exports = account; 