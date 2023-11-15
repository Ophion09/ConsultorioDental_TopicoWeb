import { isEmpty, showAlert, showSpinner, anyToken } from "./funciones.js";
import { getUserByToken, getDataByRole, getDataBySpecialty, postEmployee, deleteEmployee } from "./API.js";
import { Employee } from "./class.js";

(function () {
  const openModal = document.querySelector("#openModal");
  const closeModal = document.querySelector("#closeModal");
  const modal = document.querySelector("#myModal");
  const spinner = document.querySelector("#spinner");
  const list = document.querySelector("#employee-list");
  const formulario = document.querySelector("#formulario-employee");
  const selectRole = document.querySelector('#role');
  const selectSpecialty = document.querySelector('#specialty');
  const main = document.querySelector('#main');

  document.addEventListener("DOMContentLoaded", async () => {
    document.addEventListener('click', confirmarEliminar);

    // Diferentes consultas a la API como globales
    const dataUser = await anyToken();
    console.log(dataUser);
    const employees = await getUserByToken(dataUser);
    const roles = await getDataByRole(dataUser);
    const specialtys = await getDataBySpecialty(dataUser);

    function printEmployees() {
      employees.forEach((employee) => {
        // Iteramos sobre el arreglo obtenido como respuesta
  
        const { id_employee, name, licenseNumber, age, roleName, id_userSpecialty } = employee;
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
                      <a href="editar-employee.html?id=${id_employee}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                      <a href="#" data-employee="${id_employee}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                  </td>
              `;
  
        list.appendChild(row);
      });
    }

    function printRoleName() {
      roles.forEach(role => {
        // Aplicar destructuring
        const {id_userRole, name} = role;

        const option = document.createElement('OPTION');
        option.value = id_userRole;
        option.textContent = name;

        selectRole.appendChild(option);

      })
    }

    function printSpecialtyName() {
      specialtys.forEach(specialty => {
        const {id_userSpecialty, name} = specialty;

        const option = document.createElement('OPTION');
        option.value = id_userSpecialty;
        option.textContent = name;

        selectSpecialty.appendChild(option);
      })
    }

    async function confirmarEliminar(e) {
      if (e.target.classList.contains('eliminar')) {
        const employeeDeleteId = parseInt(e.target.dataset.employee);
        console.log(employeeDeleteId);
    
        const confirmar = confirm('¿Desea eliminar el registro?');
        if (confirmar) {
          try {
            const exito = await deleteEmployee(dataUser, employeeDeleteId);
    
            if (exito) {
              console.log('Empleado eliminado correctamente');
              showAlert('Registro eliminado con exito', 'Exito', main);
              setTimeout(() => {
              location.reload();
              }, 3000);
            } else {
              console.error('Error al eliminar al empleado');
              showAlert('Error al eliminar al empleado', 'error', main);
              setTimeout(() => {
                location.reload();
                }, 3000);
            }
          } catch (error) {
            console.error('Error en la solicitud:', error);
            showAlert('Error en el servidor', 'error', main);
            setTimeout(() => {
              location.reload();
              }, 3000);
          }
        } else {
          console.log('No se eliminó');
        }
      }
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
      showSpinner(formulario);
      // Hablando a la api
      const responseEmployee = await postEmployee(dataUser, employee);
      if(responseEmployee) {
        showAlert("Empleado Registrado Con Exito", "succes", formulario);
        console.log(employee);
        return;
      } else {
        showAlert("Error al enviar los datos", "error", formulario);
        return;
      }
    });
    printEmployees();
    printRoleName();
    printSpecialtyName();
  });
})();
