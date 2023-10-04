const Sequelize = require('sequelize');
const sequelize = require('../utils/db');
const notes = require('./medicalNotes');
const procedures = require('./procedures');

//medical notes and procedures

const medicalnotesProcedures = sequelize.define('notas_medicas_procedimientos', {
    id_nota_procedimiento: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    id_notas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'notas_medicas', 
            key: 'id_nota' 
        }
    },
    id_procedimiento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'procedimientos', 
            key: 'id_procedimiento' 
        }
    }
}, {tableName: 'notas_medicas_procedimientos',
    timestamps: false });

medicalnotesProcedures.belongsTo(notes, { foreignKey: 'id_nota', as: 'notes'});
medicalnotesProcedures.belongsTo(procedures, { foreignKey: 'id_procedimiento', as: 'procedures'});

module.exports = medicalnotesProcedures; 