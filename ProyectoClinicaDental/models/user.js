const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

//User

const user = sequelize.define('users', {
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: true, 
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {tableName: 'users', 
    timestamps: false });

module.exports = user; 
