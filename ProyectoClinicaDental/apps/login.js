import {showAlert, isEmpty, showSpinner} from './funciones.js'
import { login } from './API.js';
const formulario = document.querySelector('#formulario');
const url = 'http://localhost:3000/auth';

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log("Desde funcion vacio");
  // Elementos del HTML
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const spinner = document.querySelector('#spinner');

  // Creacion de objeto de usuario
  const user = {
    email,
    password
  };

  // Validar si el usuario esta vacio al enviar
  if(isEmpty(user)) { // Si da true, es pq hay campos vacios
    console.log('Campos vacios');
  showSpinner(spinner);
  showAlert('Todos los campos son obligatorios', 'error');
    return
  }
  console.log(user)
  showSpinner(spinner);

  // Ahora toca hablarle a la api ya que a este punto la validacion fue exitosa y ya tenemos un usuario
   await login(user);
  showAlert('Verificació Exitosa', 'Exito');

});