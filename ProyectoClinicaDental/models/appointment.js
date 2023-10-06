const Sequelize = require('sequelize');
const sequelize = require('../utils/db');
const user = require('./user');
const employee = require('./employee');

//Patients 

const appointment = sequelize.define('appointments', {
    id_appointment: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        references: {
            model: 'user', 
            key: 'id_user' 
        }
    },
    id_employee: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        references: {
            model: 'user', 
            key: 'id_user' 
        }
    },
},{ tableName: 'appointments',
    timestamps: false
  });

appointment.belongsTo(user, { foreignKey: 'id_user', as: 'users'});
appointment.belongsTo(employee, { foreignKey: 'id_employee', as: 'employees'});


module.exports = appointment; 