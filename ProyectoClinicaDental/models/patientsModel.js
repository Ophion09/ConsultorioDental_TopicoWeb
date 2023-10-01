const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

//Patients Model 

const Patients = sequelize.define('pacientes', {
    id_paciente: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    edad: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    celular: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    direccion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios', 
            key: 'id_usuario' 
        }
    },
    sexo: {
        type: Sequelize.ENUM('Masculino', 'Femenino', 'Otro'),
        allowNull: false
    }
})

module.exports = Patients; 