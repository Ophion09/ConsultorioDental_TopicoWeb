const Sequelize = require('sequelize');
const sequelize = require('../utils/db');
const procedures = require('./procedures');
//const appointment = require('./appointment');
const patient = require('./patients');
//const employee = require('./empleado');

//medical notes 

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
        unique: true,
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
    },
    id_empleado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'empleados', 
            key: 'id_empleado' 
        }
    }
}, {tableName: 'notas_medicas',
    timestamps: false });

medicalNotes.belongsTo(procedures, { foreignKey: 'id_procedimiento', as: 'procedure'});
//medicalNotes.belongsTo(appointment, { foreignKey: 'id_cita', as: 'appointment'});
medicalNotes.belongsTo(patient, { foreignKey: 'id_paciente', as: 'patient'});
//medicalNotes.belongsTo(employee, { foreignKey: 'id_empleado', as: 'employee'});      

module.exports = medicalNotes; 