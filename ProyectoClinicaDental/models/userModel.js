const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

//User Model 

const User = sequelize.define('usuarios', {
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    correo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contrasena: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, { timestamps: false });

module.exports = User; 
