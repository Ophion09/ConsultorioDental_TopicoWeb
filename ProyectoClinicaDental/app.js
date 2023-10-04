const sequelize = require('./utils/db');
const User = require('./controllers/user');
const Procedures = require('./controllers/procedures')
const Patients = require('./controllers/patients')
const Payments = require('./controllers/payments')
const MedicalRecords = require('./controllers/medicalRecords')
const MedicalrecordsProcedures = require('./controllers/medicalNotesProcedures')
const MedicalNotes = require('./controllers/medicalNotes')
const Account = require('./controllers/account')

console.log("para acceder a las funcionalidades se requiere primeramente la agregacion de un usuario")
//Patients.addPatients("Jose", "Rodriguez", 22, "3445566772", "calle perenganito 421", 4, 1 );
/*
sequelize.sync()
.then((resultado) => {
    console.log('Se establecio correctamente la conexion con la bd');
}).catch((error) => {
    console.log('No se pudo establecer la conexion con la db');
});
*/

//agregar: User.addUser("jose@hotmail.com","pepesd");
// User.addUser("esjany@hotmail.com","contrasena");

/*exitosos user

Agregar

User.addUser("jose@hotmail.com","pepesd");

Obtener

User.getUsers().then( users => {
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

User.getUserByEmail("esjany@hotmail.com").then( user => {
    console.log(`ID: ${user.id_usuario}, Correo: ${user.correo}, Password: ${user.contrasena}`);
}).catch(error => {
  console.error('Error al obtener la lista de usuarios:', error);
});

Borrar

User.deleteUser(1).then( user => {
  console.log(user);
}).catch(error => {
 console.error('Error al obtener la lista de usuarios:', error);
});

User.deleteUserByEmail("esjany@hotmail.com").then( user => {
  console.log(user);
}).catch(error => {
 console.error('Error al obtener la lista de usuarios:', error);
});

actaulizar

const nuevosValores = {
  correo: 'casasola@hotmail.com'
};

User.updateUser(6, nuevosValores)
  .then((usuarioActualizado) => {
    if (usuarioActualizado[0] === 1) {
      console.log('Usuario actualizado con éxito');
    } else {
      console.log('Usuario no encontrado o no actualizado');
    }
  })
  .catch((error) => {
    console.error('Error al actualizar el usuario:', error);
  });
 */



/* extoso procedimientos
Procedures.addProcedures("Brackets", 250);
Procedures.addProceduresWithDiscounts("Limpieza", 250, 25);
Procedures.addDiscounts(1,25);

Procedures.getProcedures().then( procedures => {
  for (const procedure of procedures) {
    console.log(`ID: ${procedure.id_procedimiento}, Nombre: ${procedure.nombre}, Precio: ${procedure.precio}, Decuento: ${procedure.descuento}`);
  }
}).catch(error => {
  console.error('Error al obtener la lista de procedimientos:', error);
});

Procedures.getProcedureByName("Limpieza").then( procedure => {
  console.log(`ID: ${procedure.id_procedimiento}, Nombre: ${procedure.nombre}, Precio: ${procedure.precio}, Decuento: ${procedure.descuento}`);
}).catch(error => {
  console.error('Error al obtener la lista de procedimientos:', error);
});

Procedures.getProcedureById(1).then( procedure => {
  console.log(`ID: ${procedure.id_procedimiento}, Nombre: ${procedure.nombre}, Precio: ${procedure.precio}, Decuento: ${procedure.descuento}`);
}).catch(error => {
  console.error('Error al obtener la lista de procedimientos:', error);
});

Procedures.deleteProcedure(1).then( procedure => {
  console.log(procedure);
}).catch(error => {
 console.error('Error al obtener la lista de procedimientos:', error);
});

Procedures.deleteProcedureByName("brackets").then( procedure => {
  console.log(procedure);
}).catch(error => {
 console.error('Error al obtener la lista de procedimientos:', error);
});

Procedures.deleteDiscuount(2).then( procedure => {
  console.log(procedure);
}).catch(error => {
 console.error('Error al obtener la lista de procedimientos:', error);
});

const nuevosValores = {
  nombre: 'Limpieza'
};

Procedures.updateProcedure(2, nuevosValores)
  .then((procedimientoActualizado) => {
    if (procedimientoActualizado[0] === 1) {
      console.log('Procedimiento actualizado con éxito');
    } else {
      console.log('Procedimiento no encontrado o no actualizado');
    }
  })
  .catch((error) => {
    console.error('Error al actualizar el Procedimiento:', error);
  });
*/

/*  pacientes casos exitosos
patients.addPatients("Esjany", "Hernandez", 22, "3445566772", "calle perenganito 421", 4, 2 );
*/
//por probar

