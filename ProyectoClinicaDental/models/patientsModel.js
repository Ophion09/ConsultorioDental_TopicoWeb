const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

//Patients Model 

const Patients = sequelize.define('pacientes', {
    id_paciente: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
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
        type: Sequelize.STRING,
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
},{
    timestamps: false
  });

module.exports = Patients; 