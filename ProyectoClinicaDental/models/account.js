const Sequelize = require('sequelize');
const sequelize = require('../utils/db');
const patient = require('./patients');

//account 

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
}, {tableName: 'cuentas',
    timestamps: false });

account.belongsTo(patient, { foreignKey: 'id_paciente', as: 'patient'});    

module.exports = account; 