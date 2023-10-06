const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('db_clinicadental', 'root', 'proyectos21', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;