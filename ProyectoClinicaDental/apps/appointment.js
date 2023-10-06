// Clase prueba para pacientes
const sequelize = require("../utils/db");
const appointmentController = require("../controllers/appointment");
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
        "[1] Leer tabla de pacientes, [2] Crear Nuevo paciente, [3] Eliminar paciente por ID, [4] Actualizar paciente, [5] Salir."
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

// Función para crear un nuevo paciente
async function create() {
  try {
    const date = await ask("Fecha YYYY-MM-DD: ");
    const time = await ask("Hora HH:MM:SS : ");
    const id_user = await ask("id del usuario: ");
    const id_employee = await ask("id del empleado: ");

    // Asignando las respuestas obtenidad al objeto data
    const dataAppointment = {
      date,
      time,
      id_user,
      id_employee
    };

    // Pasando de argumento al metodo el objeto previamente construido
    appointmentController.addAppointment(dataAppointment)
  } catch (error) {
    console.log(error);
  }
}

// Leer todas las tablas
async function read() {
  try {
    appointmentController.getAppointments();
  } catch (err) {
    console.log(err);
  }
}

//elimina al paciente
async function remove() {
  try {
    const id = await ask("ID a eliminar: ");
    appointmentController.deleteAppointments(id);
  } catch (err) {
    console.log(err);
  }
}

//actualizar paciente
async function update() {
  try {
    const id = await ask("ID de la cita a actualizar: ");
    const date = await ask("Fecha YYYY-MM-DD: ");
    const time = await ask("Hora HH:MM:SS : ");
    const id_user = await ask("id del usuario: ");
    const id_employee = await ask("id del empleado: ");

    const dataAppointment = {
        date,
        time,
        id_user,
        id_employee
      };

    appointmentController.updateAppointment(id, appointmentController);
  } catch (err) {
    console.log(err);
  }
}

main();