import {
  anyToken,
  showAlert,
  showSpinner,
  printUserName,
  isEmpty,
  deleteUserSession,
  validateStatus,
} from "./funciones.js";

import { getUsers } from "../API/user.js";

import { getEmployees } from "../API/employee.js";

import { postNewAppointment } from "../API/appointment.js";

import { Appointment } from "./class.js";

(function () {
  const greetin = document.querySelector("#welcome");
  const btnLogOut = document.querySelector("#logOut");
  const userSelect = document.querySelector("#id_user");
  const doctorSelect = document.querySelector('#id_employee');
  const formulario = document.querySelector('#formulario');

  document.addEventListener("DOMContentLoaded", async () => {
    const dataUser = await anyToken();
    console.log(dataUser);

    async function printEmailForm() {
      const usersNormal = await searchUsers();

      usersNormal.forEach((user) => {
        const { email, userName, id_user } = user;
        const option = document.createElement("OPTION");
        option.value = id_user;
        option.textContent = email;

        userSelect.appendChild(option);
      });
    }

    async function printDoctorForm() {
        const doctors = await searchDoctors();

        doctors.forEach(doctor => {
            const {id_employee, name} = doctor;
            const option = document.createElement('OPTION');
            option.value = id_employee;
            option.textContent = name;

            doctorSelect.appendChild(option);
        })
    }

    async function searchUsers() {
      // Llamada a las API
      const users = await getUsers(dataUser);
      const usersNormal = [];
      // Por cada usuario que sea de tipo normal, lo movere a su correspondiente arreglo
      users.forEach((user) => {
        const { type } = user;
        if (type === "Normal") {
          usersNormal.push(user);
          return;
        } else {
          return;
        }
      });
      return usersNormal;
    }

    async function searchDoctors() {
      // Llamada a la API
      const employees = await getEmployees(dataUser);
      console.log(employees);
      const doctors = [];
      console.log(doctors);
      employees.forEach((employee) => {
        const { id_userRole } = employee;
        if (id_userRole === 2) {
          console.log(employee);
          doctors.push(employee);
          return;
        } else {
          console.log("No es medico");
          return;
        }
      });
      console.log(doctors);
      return doctors;
    }

    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id_user = document.querySelector('#id_user').value;
        const id_employee = document.querySelector('#id_employee').value;
        const date = document.querySelector('#date').value;
        const time = document.querySelector('#time').value;
        const motivo = document.querySelector('#motivo').value;

        // Construccion del objeto
        const appointment = new Appointment(id_user, id_employee, date, time, motivo);
        console.log(appointment);

        // Validar Objeto
        if(isEmpty(appointment)) {
            showAlert('Todos los campos son obligatorios', 'error', formulario);
            return;
        }
        // Enviar a la API el objeto para crearlo
        const newAppointment = await postNewAppointment(dataUser, appointment);
        console.log(newAppointment);
        //validateStatus(newAppointment, 'create', 'Cita', formulario);
        return;
    })

    printEmailForm();
    printDoctorForm();
    btnLogOut.addEventListener("click", deleteUserSession);
    printUserName(dataUser, greetin);
  });
})();
