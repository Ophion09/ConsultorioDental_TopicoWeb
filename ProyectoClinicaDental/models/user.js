const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

//User

const user = sequelize.define('usuarios', {
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    correo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    contrasena: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {tableName: 'usuarios', 
    timestamps: false });

module.exports = user; 
