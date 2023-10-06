// Clase prueba para pacientes
const sequelize = require("../utils/db");
const patientController = require("../controllers/patients");
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
    const nombre = await ask("Nombre: ");
    const apellido = await ask("Apellido: ");
    const edad = await ask("Edad: ");
    const celular = await ask("Celular: ");
    const direccion = await ask("Direccion: ");
    const id_usuario = await ask("Id del usuario: ");
    const sexo = await ask("Sexo (Coloque el numero correspondiente: Masculino (1), Femenino(2), Otro(3)): ");

    // Asignando las respuestas obtenidad al objeto data
    const dataPatient = {
      nombre,
      apellido,
      edad,
      celular,
      direccion,
      id_usuario,
      sexo
    };

    // Pasando de argumento al metodo el objeto previamente construido
    patientController.addPatients(dataPatient);
  } catch (error) {
    console.log(error);
  }
}

// Leer todas las tablas
async function read() {
  try {
    patientController.getPatients();
  } catch (err) {
    console.log(err);
  }
}

//elimina al paciente
async function remove() {
  try {
    const id = await ask("ID a eliminar: ");
    patientController.deletePatient(id);
  } catch (err) {
    console.log(err);
  }
}

//actualizar paciente
async function update() {
  try {
    const id = await ask("ID del paciente a actualizar: ");
    const nombre = await ask("Nombre a actualizar: ");
    const apellido = await ask("Apellido a actualizar: ");
    const edad = await ask("Edad a actualizar: ");
    const celular = await ask("Celular a actualizar: ");
    const direccion = await ask("Direccion a actualizar: ");
    const sexo = await ask("Sexo a actualizar (Coloque el numero correspondiente: Masculino (1), Femenino(2), Otro(3)): ");

    const dataUpdatePatient = {
      nombre,
      apellido,
      edad,
      celular,
      direccion,
      sexo
    };

    patientController.updatePatient(id, dataUpdatePatient);
  } catch (err) {
    console.log(err);
  }
}

main();