import { showAlert, isEmpty, showSpinner, cleanHTML } from "./funciones.js";
import { login } from "./API.js";
import { User } from "./class.js";
const formulario = document.querySelector("#formulario");
const url = "http://localhost:3000/auth";

formulario.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("Desde funcion vacio");
  // Elementos del HTML
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const spinner = document.querySelector("#spinner");

  // Creacion de objeto de usuario
  const user = new User(email, password);


  // Validar si el usuario esta vacio al enviar
  if (isEmpty(user)) {
    // Si da true, es pq hay campos vacios
    console.log("Campos vacios");
    showAlert("Todos los campos son obligatorios", "error", formulario);
    return;
  }
  console.log(user);
  showSpinner(spinner);

  // Ahora toca hablarle a la api ya que a este punto la validacion fue exitosa y ya tenemos un usuario
    const userToken = await login(user); // retorna un usuario desde la API
    //showAlert('Verificació Exitosa', 'Exito');

    if (userToken) {
      const {email, token} = userToken; // Aplicando destructuring para poder extraer los valores que queremos de la response
      // Informacion de la sesion del usuario
      const userSession = {
        email,
        token
      };
      localStorage.setItem("user", JSON.stringify(userSession)); // Para no pasar informacion delicada del lado del cliente
      console.log(userToken);
      return;
    } else {
      cleanHTML(spinner);
      showAlert('Credenciales Invalidas', 'error', formulario);
      return;
    }
});
