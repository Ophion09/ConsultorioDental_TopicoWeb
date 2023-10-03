const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

//notas medicas modelo

const medicalNotes = sequelize.define('notas_medicas', {
    id_nota: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    nota: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_procedimiento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'procedimientos', 
            key: 'id_procedimiento' 
        }
    },
    id_cita: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'citas', 
            key: 'id_cita' 
        }
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

module.exports = medicalNotes; 