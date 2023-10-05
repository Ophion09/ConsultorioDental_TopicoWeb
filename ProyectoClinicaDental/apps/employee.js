// Clase prueba para empleados
const sequelize = require("../utils/db");
const employeeController = require("../controllers/employee");
const readline = require("readline");

// Empieza proceso para probar funcionalildades de CRUD
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  try {
    while (true) {
      console.log("Seleccione una opcion:");
      console.log(
        "[1] Leer tabla de empleados, [2] Crear Nuevo empleado, [3] Eliminar empleado por ID, [4] Actualizar empleado, [5] Salir."
      );

      const option = await ask("opcion: ");

      switch (option) {
        case "1":
          await read();
          break;
        case "2":
          await create();
          break;
        case "3":
          await remove();
          break;
        case "4":
          await update();
          break;
        case "5":
          console.log("Saliendo del sistema");
          process.exit(0);
        default:
          console.log("Opcion no valida");
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Función para crear un nuevo usuario
async function create() {
  try {
    const name = await ask("Nombre: ");
    const licenseNumber = await ask("Numero de licencia: ");
    const age = await ask("Edad: ");
    const id_userRole = await ask("Id del rol: ");
    const id_userSpecialty = await ask("Id de la especialidad: ");

    // Asignando las respuestas obtenidad al objeto data
    const dataEmployee = {
      name,
      licenseNumber,
      age,
      id_userRole,
      id_userSpecialty,
    };

    // Pasando de argumento al metodo el objeto previamente construido
    employeeController.addEmployee(dataEmployee);
  } catch (error) {
    console.log(error);
  }
}

// Leer todas las tablas
async function read() {
  try {
    employeeController.getEmployees();
  } catch (err) {
    console.log(err);
  }
}

async function remove() {
  try {
    const id = await ask("ID a eliminar: ");
    employeeController.deleteEmployee(id);
  } catch (err) {
    console.log(err);
  }
}

async function update() {
  try {
    const id = await ask("ID del empleado a actualizar: ");
    const name = await ask("Nombre a actualizar: ");
    const licenseNumber = await ask("Numero de licencia a actualizar: ");
    const age = await ask("Edad a actualizar: ");

    const dataUpdateEmployee = {
      name,
      licenseNumber,
      age
    };

    employeeController.updateEmployee(id, dataUpdateEmployee);
  } catch (err) {
    console.log(err);
  }
}

main();
