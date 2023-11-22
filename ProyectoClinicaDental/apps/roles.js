import {
  anyToken,
  showAlert,
  showSpinner,
  printUserName,
  isEmpty,
} from "./funciones.js";
import { getRoles, postNewRole } from "./API.js";
import { Role } from "./class.js";

(function () {
  // Variables Globales
  const list = document.querySelector("#role-list");
  const modalRole = document.querySelector("#myModalRole");
  const openModalRole = document.querySelector("#openModalRole");
  const closeModalRole = document.querySelector("#closeModalRole");
  const greeting = document.querySelector("#welcome");
  const formulario = document.querySelector("#formularioRole");

  document.addEventListener("DOMContentLoaded", async () => {
    // Llamadas a la API
    const dataUser = await anyToken();
    console.log(dataUser);
    // Llamadas a los metodos de la API
    const roles = await getRoles(dataUser);

    /**
     * Metodo para imprimir los elementos de la tabla de roles
     * @param {*} roles
     */
    async function printRoles(roles) {
      roles.forEach((rol) => {
        const { id_userRole, name } = rol;
        console.log(name);
        // Construccion del objeto Rol
        const row = document.createElement("TR");
        row.innerHTML += `
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                      <a href="employee-edit.html?id=${id_userRole}" data-employee="${id_userRole}" class="text-teal-600 hover:text-teal-900 mr-5 editar">Editar</a>
                      <a href="#" data-employee="${id_userRole}" class="text-red-600 hover:text-red-900 mr-5 eliminar">Eliminar</a>
                  </td>
              `;

        list.appendChild(row);
      });
    }

    openModalRole.addEventListener("click", () => {
      modalRole.classList.remove("hidden");
      setTimeout(() => {
        modalRole.children[0].classList.add("opacity-100", "scale-100");
      }, 50);
    });

    closeModalRole.addEventListener("click", () => {
      modalRole.classList.add("hidden");
      setTimeout(() => {
        modalRole.children[0].classList.remove("opacity-100", "scale-100");
      }, 50);
    });

    formulario.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.querySelector("#nameRole").value;
      const newRole = {
        name,
      };
      if (isEmpty(newRole)) {
        console.log("Esta vacio");
        showAlert("El campo es obligatorio", "error", formulario);
        return;
      } else {
        console.log(newRole);
        showSpinner(formulario);
        const createRole = await postNewRole(dataUser, newRole);
        if (createRole) {
          showAlert("Exito, Nuevo Rol Creado", "exito", formulario);
          return;
        }
        return;
      }
    });

    printRoles(roles);
    printUserName(dataUser, greeting);
  });
})();
