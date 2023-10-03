const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

//Medica Records Model 

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
}, { timestamps: false });

module.exports = medicalRecords; 