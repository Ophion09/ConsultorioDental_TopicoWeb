import {
  anyToken,
  showAlert,
  showSpinner,
  printUserName,
  isEmpty,
  deleteUserSession,
} from "./funciones.js";

import {
    getUsers
} from "../API/user.js";

(function () {
  const greetin = document.querySelector("#welcome");
  const btnLogOut = document.querySelector("#logOut");

  document.addEventListener("DOMContentLoaded", async () => {
    const dataUser = await anyToken();
    console.log(dataUser);

    async function printForm() {

        


        console.log('Hola desde form');
    }

    async function users() {
        // Llamada a las API
        const users = await getUsers(dataUser);
        console.log(users);
        const userNormal = [];

        // Por cada usuario que sea de tipo normal, lo movere a su correspondiente arreglo
        users.forEach(user => {
            
        });
    }



    printForm();
    btnLogOut.addEventListener("click", deleteUserSession);
    printUserName(dataUser, greetin);
  });
})();
