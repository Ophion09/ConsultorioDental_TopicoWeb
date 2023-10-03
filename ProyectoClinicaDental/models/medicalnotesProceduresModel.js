const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

//notas medicas y procedimientos modelo 

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
}, { timestamps: false });

module.exports = medicalnotesProcedures; 