const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('db_clinicadental', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

// Comprobar la conexion
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa.');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

module.exports = sequelize;