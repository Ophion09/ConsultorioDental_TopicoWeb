const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

//Procedures 

const procedures = sequelize.define('procedimientos', {
    id_procedimiento: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    precio: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    descuento: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
}, {tableName: 'procedimientos',
    timestamps: false });

module.exports = procedures; 