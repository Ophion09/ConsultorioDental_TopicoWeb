const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

//Procedures Model 

const Procedures = sequelize.define('procedimientos', {
    id_procedimiento: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    precio: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    descuento: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
}, { timestamps: false });

module.exports = Procedures; 