
import { isEmpty, showAlert, showSpinner, anyToken } from "./funciones.js";
import { getUserByToken } from "./API.js";


(function(){


const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');
const modal = document.querySelector('#myModal');
const formulario = document.querySelector('#formulario');
const spinner = document.querySelector('#spinner');


document.addEventListener('DOMContentLoaded', async () => {

  const dataUser = await anyToken();
  console.log(dataUser);
  getUserByToken(dataUser);


  openModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
    // Es para hacer mas fluida la animacion del modal
    setTimeout(() => {
      modal.children[0].classList.add('opacity-100', 'scale-100');
    }, 50);
  });
  
  closeModal.addEventListener('click', () => {
    modal.children[0].classList.remove('opacity-100', 'scale-100');
    // Y esto tambien para hacer mas fluida la animacion para el modal
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  });
  

});

formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevenir el evento de default que es POST
// Seleccionar todos los campos del form
const name = document.querySelector('#name').value;
const licenseNumber = document.querySelector('#licenseNumber').value;
const age = document.querySelector('#age').value;
const role = document.querySelector('#role').value;
const specialty = document.querySelector('#specialty').value;

const employee = {
  name,
  licenseNumber,
  age,
  role,
  specialty
};

// Validar usuario
if(isEmpty(employee)) { // Si realmente hay un true, entonces esta vacia y haz lo siguiente
  showAlert('¡Todos los campos son obligatorios!', 'error', formulario);
  return; // hasta aqui se termina la ejecucion
}
showAlert('Empleado Registrado Con Exito', 'succes', formulario);
//showSpinner(spinner);
console.log(employee);

});



})();


