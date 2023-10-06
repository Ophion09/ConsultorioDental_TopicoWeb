const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

//User

const user = sequelize.define('users', {
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {tableName: 'users', 
    timestamps: false });

module.exports = user; 
