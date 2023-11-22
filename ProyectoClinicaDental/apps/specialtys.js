import { anyToken, showAlert, showSpinner, printUserName } from "./funciones.js";
import { getRoles, getSpecialtys } from "./API.js";
import { Role } from "./class.js";

(function(){
    // Variables Globales
  const list = document.querySelector("#role-list");
  const listSpecialtys = document.querySelector("#specialty-list");
  const modalRole = document.querySelector('#myModalRole')
  const openModalRole = document.querySelector('#openModalRole');
  const closeModalRole = document.querySelector('#closeModalRole');
  const greeting = document.querySelector('#welcome');

  document.addEventListener('DOMContentLoaded', async () => {
    const dataUser = await anyToken();
    console.log(dataUser);

    const specialtys = await getSpecialtys(dataUser);

    /**
     * Metodo para imprimir los elementos de la tabla de especialidades
     * @param {*} specialtys 
     */
    async function printSpecialty(specialtys) {
        specialtys.forEach((specialty) => {
          const { id_userSpecialty, name } = specialty;
          console.log(id_userSpecialty, name);
  
          const row = document.createElement("TR");
          row.innerHTML += `
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                        <a href="employee-edit.html?id=${id_userSpecialty}" data-employee="${id_userSpecialty}" class="text-teal-600 hover:text-teal-900 mr-5 editar">Editar</a>
                        <a href="#" data-employee="${id_userSpecialty}" class="text-red-600 hover:text-red-900 mr-5 eliminar">Eliminar</a>
                    </td>
                `;
  
          listSpecialtys.appendChild(row);
        });
      }

      printSpecialty(specialtys);
      printUserName(dataUser, greeting);


  });


})();