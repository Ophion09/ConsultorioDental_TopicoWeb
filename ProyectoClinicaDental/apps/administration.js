import { isEmpty, showAlert, showSpinner, anyToken } from "./funciones.js";
import { getUserByToken, getDataByRole } from "./API.js";
import { Employee } from "./class.js";

(function () {
  const openModal = document.querySelector("#openModal");
  const closeModal = document.querySelector("#closeModal");
  const modal = document.querySelector("#myModal");
  const spinner = document.querySelector("#spinner");
  const list = document.querySelector("#employee-list");
  const formulario = document.querySelector("#formulario-employee");
  const selectRole = document.querySelector('#role');

  document.addEventListener("DOMContentLoaded", async () => {
    // Diferentes consultas a la API como globales
    const dataUser = await anyToken();
    console.log(dataUser);
    const employees = await getUserByToken(dataUser);
    console.log(employees);
    const roles = await getDataByRole(dataUser);
    console.log(roles);

    function printEmployees() {
      employees.forEach((employee) => {
        // Iteramos sobre el arreglo obtenido como respuesta
        console.log(employee);
  
        const { name, licenseNumber, age, roleName, id_userSpecialty } = employee;
        // Scripting Time
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
                      <p class="text-gray-600">${roleName}</p>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                      <a href="editar-cliente.html?id=${id_userSpecialty}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                      <a href="#" data-cliente="${id_userSpecialty}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                  </td>
              `;
  
        list.appendChild(row);
      });
    }

    function printRoleNameAndSpecialty() {
      roles.forEach(role => {
        // Aplicar destructuring
        const {id_userRole, name} = role;
        console.log(name);
        console.log(id_userRole);

        const option = document.createElement('OPTION');
        option.value = id_userRole;
        option.textContent = name;

        selectRole.appendChild(option);

      })
    }
    
    openModal.addEventListener("click", () => {
      modal.classList.remove("hidden");
      // Es para hacer mas fluida la animacion del modal
      setTimeout(() => {
        modal.children[0].classList.add("opacity-100", "scale-100");
      }, 50);
    });

    closeModal.addEventListener("click", () => {
      modal.children[0].classList.remove("opacity-100", "scale-100");
      // Y esto tambien para hacer mas fluida la animacion para el modal
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 300);
    });

    formulario.addEventListener("submit", async (e) => {
      e.preventDefault(); // Prevenir el evento de default que es POST
      // Seleccionar todos los campos del form
      const name = document.querySelector("#name").value;
      const licenseNumber = document.querySelector("#licenseNumber").value;
      const age = document.querySelector("#age").value;
      const id_userRole = document.querySelector("#role").value;
      const id_userSpecialty = document.querySelector("#specialty").value;

      const employee = new Employee(
        name,
        licenseNumber,
        age,
        id_userRole,
        id_userSpecialty
      );

      // Validar usuario
      if (isEmpty(employee)) {
        // Si realmente hay un true, entonces esta vacia y haz lo siguiente
        showAlert("¡Todos los campos son obligatorios!", "error", formulario);
        return; // hasta aqui se termina la ejecucion
      }
      showAlert("Empleado Registrado Con Exito", "succes", formulario);
      //showSpinner(spinner);
      console.log(employee);
    });

    printEmployees();
    printRoleNameAndSpecialty();
  });
})();
