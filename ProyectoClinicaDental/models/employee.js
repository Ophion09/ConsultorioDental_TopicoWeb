// EmpleadoModel
const {DataTypes} = require('sequelize');
const sequelize = require('../utils/db');
// Instancia de mis otros modelos
const roleModel = require('./rol');
const especialtyModel = require('./especialidad');

// Modelo para tabla personal (empleado)

const employee = sequelize.define('employee', {
    id_employee: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      licenseNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_userRole: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'id_rol_UNIQUE',
      },
      id_userSpecialty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'id_especialidad_UNIQUE',
      },
    }, {
      tableName: 'employees', // Nombre de la tabla
      timestamps: false, // No columnas time
});

employee.belongsTo(roleModel, { foreignKey: 'id_userRole' });
employee.belongsTo(especialtyModel, { foreignKey: 'id_userSpecialty' });

module.exports = employee;