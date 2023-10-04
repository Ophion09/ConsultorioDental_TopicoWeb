const Sequelize = require('sequelize');
const sequelize = require('../utils/db');
const patients = require('./patients');

//Medica Records 

const medicalRecords = sequelize.define('historiales_clinicos', {
    id_historial: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    alergias: {
        type: Sequelize.STRING,
        allowNull: true
    },
    procedimientos: {
        type: Sequelize.STRING,
        allowNull: true
    },
    otros: {
        type: Sequelize.STRING,
        allowNull: true
    },
    id_paciente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'pacientes', 
            key: 'id_paciente' 
        }
    }
}, {tableName: 'historiales_clinicos',
    timestamps: false });

medicalRecords.belongsTo(patients, { foreignKey: 'id_paciente', as: 'patient'});

module.exports = medicalRecords; 