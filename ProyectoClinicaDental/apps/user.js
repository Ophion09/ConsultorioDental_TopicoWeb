import {
  isEmpty,
  showAlert,
  showSpinner,
  anyToken,
  printUserName,
} from "./funciones.js";
import { getUsers, postUser, deleteUser, TypeEnum } from "./API.js";
import { User } from "./class.js";

(function () {
  const openModal = document.querySelector("#openModal");
  const closeModal = document.querySelector("#closeModal");
  const modal = document.querySelector("#myModal");
  const list = document.querySelector("#user-list");
  const formulario = document.querySelector("#formulario-user");
  const main = document.querySelector("#main");
  const greeting = document.querySelector("#welcome");

  document.addEventListener("DOMContentLoaded", async () => {
    document.addEventListener("click", confirmarEliminarUser);
    // Diferentes consultas a la API como globales
    const dataUser = await anyToken();
    console.log(dataUser);
    const users = await getUsers(dataUser);

    async function printUser() {
      users.forEach((user) => {
        // Iteramos sobre el arreglo obtenido como respuesta

        const { id_user, email, userName, type } = user;
        // Scripting Time
        const row = document.createElement("TR");
        row.innerHTML += `
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${email} </p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold">${userName}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                        <p class="text-gray-600">${type}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                        <a href="user-edit.html?id=${id_user}" data-user="${id_user}" class="text-teal-600 hover:text-teal-900 mr-5 editar">Editar</a>
                        <a href="#" data-user="${id_user}" class="text-red-600 hover:text-red-900 mr-5 eliminar">Eliminar</a>
                    </td>
                `;

        list.appendChild(row);
      });
    }

    function typeOptions(selectElement) {
      // Limpia las opciones existentes
      selectElement.innerHTML = "";

      // Añade una opción predeterminada vacía
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "Selecciona un tipo";
      selectElement.appendChild(defaultOption);

      // Añade opciones basadas en TypeEnum
      for (const key in TypeEnum) {
        const option = document.createElement("option");
        option.value = TypeEnum[key];
        option.textContent = key;
        selectElement.appendChild(option);
      }
    }

    async function confirmarEliminarUser(e) {
      if (e.target.classList.contains("eliminar")) {
        const userDeleteId = parseInt(e.target.dataset.user);
        console.log(userDeleteId);

        const confirmar = confirm("¿Desea eliminar el registro?");
        if (confirmar) {
          try {
            const exito = await deleteUser(dataUser, userDeleteId);

            if (exito) {
              console.log("Usuario eliminado correctamente");
              showAlert("Registro eliminado con exito", "Exito", main);
              setTimeout(() => {
                location.reload();
              }, 2000);
            } else {
              console.error("Error al eliminar al usuario");
              showAlert("Error al eliminar al usuario", "error", main);
              setTimeout(() => {
                location.reload();
              }, 2000);
            }
          } catch (error) {
            console.error("Error en la solicitud:", error);
            showAlert("Error en el servidor", "error", main);
            setTimeout(() => {
              location.reload();
            }, 2000);
          }
        } else {
          console.log("No se eliminó");
        }
      }
    }

    openModal.addEventListener("click", () => {
      modal.classList.remove("hidden");
      // Es para hacer mas fluida la animacion del modal
      setTimeout(() => {
        modal.children[0].classList.add("opacity-100", "scale-100");
        typeOptions(document.querySelector("#type"));
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
      const email = document.querySelector("#email").value;
      const userName = document.querySelector("#userName").value;
      const password = document.querySelector("#password").value;
      const type = document.querySelector("#type").value;

      const user = new User(email, password, undefined, userName, type);

      // Validar usuario
      if (isEmpty(user)) {
        // Si realmente hay un true, entonces esta vacia y haz lo siguiente
        showAlert("¡Todos los campos son obligatorios!", "error", formulario);
        return; // hasta aqui se termina la ejecucion
      }
      showSpinner(formulario);
      // Hablando a la api
      const response = await postUser(dataUser, user);
      if (response) {
        showAlert("Usuario Registrado Con Exito", "succes", formulario);
        return;
      } else {
        showAlert("Error al enviar los datos", "error", formulario);
        return;
      }
    });
    printUser();
    printUserName(dataUser, greeting);
  });
})();
