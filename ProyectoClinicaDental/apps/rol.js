// Clase prueba para roles
const sequelize = require("../utils/db");
const roleController = require("../controllers/rol");

// Creacion de un rol nuevo
//roleController.addRol('HOla'); // Inserte el nombre que desee como prueba

// Ver nombre de rol por id:
//roleController.getRol(6); // Segun la db, deberia traer a secretario/a

// Actualizar rol por id:
// const updateData = {
//     name: 'Doctor22'
// };
// roleController.updateRole(6, updateData); // En este caso actualizaria a doctor por Doctor2

// Eliminando por id
//roleController.deleteRole(8); // Elimina el id 8 que seria Hola