const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

//Medica Records Model 

const medicalRecords = sequelize.define('pacientes', {
    id_historial: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true
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
})

module.exports = medicalRecords; 