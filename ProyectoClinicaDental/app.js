const sequelize = require('./utils/db');
const User = require('./controllers/userController');

/*
sequelize.sync()
.then((resultado) => {
    console.log('Se establecio correctamente la conexion con la bd');
}).catch((error) => {
    console.log('No se pudo establecer la conexion con la db');
});
*/

/*exitosos
User.addUser("jose@hotmail.com","pepesd");
User.getUser().then( users => {
    for (const user of users) {
      console.log(`ID: ${user.id_usuario}, Correo: ${user.correo}, Password: ${user.contrasena}`);
    }
  }).catch(error => {
    console.error('Error al obtener la lista de usuarios:', error);
  });
User.getUserById(2).then( user => {
  console.log(`ID: ${user.id_usuario}, Correo: ${user.correo}, Password: ${user.contrasena}`);
  }).catch(error => {
  console.error('Error al obtener al usuario:', error);
});
 */

//por probar
User.getUsers().then( users => {
  for (const user of users) {
    console.log(`ID: ${user.id_usuario}, Correo: ${user.correo}, Password: ${user.contrasena}`);
  }
}).catch(error => {
  console.error('Error al obtener la lista de usuarios:', error);
});