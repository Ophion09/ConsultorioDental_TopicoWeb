import { anyToken, showAlert, showSpinner } from "./funciones.js";
import { getRoles } from "./API.js";
import { Role } from "./class.js";

(function(){

    const list = document.querySelector('#roles-list');

    document.addEventListener('DOMContentLoaded', async () => {

        const dataUser = await anyToken();
        console.log(dataUser);
        // Llamadas a los metodos de la API
        const roles = await getRoles(dataUser);


        /**
         * Metodo para imprimir la tabla de roles
         * @param {*} roles 
         */
        async function printRoles(roles) {
            roles.forEach(rol => {
            const {name} = rol
                console.log(name);
                // Construccion del objeto Rol
                const row = document.createElement("TR");
        row.innerHTML += `
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                      <p class="text-gray-700">${licenseNumber}</p>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                      <p class="text-gray-600">${age}</p>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                      <p class="text-gray-600">${roleName}</p>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                      <p class="text-gray-600">${specialtyName}</p>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                      <p class="text-gray-600">${emailUser}</p>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                      <a href="employee-edit.html?id=${id_employee}" data-employee="${id_employee}" class="text-teal-600 hover:text-teal-900 mr-5 editar">Editar</a>
                      <a href="#" data-employee="${id_employee}" class="text-red-600 hover:text-red-900 mr-5 eliminar">Eliminar</a>
                      <a href="#" data-employee="${id_employee}" class="text-yellow-600 hover:text-red-900 ver">Ver</a>
                  </td>
              `;

        list.appendChild(row);
            });
        }

        printRoles(roles);

    })
})();