const sequelize = require('./utils/db');

sequelize.sync()
.then((resultado) => {
    console.log('Se establecio correctamente la conexion con la bd');
}).catch((error) => {
    console.log('No se pudo establecer la conexion con la db');
});