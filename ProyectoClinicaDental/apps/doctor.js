import {
    anyToken,
    showAlert,
    showSpinner,
    printUserName,
    isEmpty,
    deleteUserSession,
    validateStatus,
    printUserNameDoctor,
  } from "./funciones.js";
  
  import { getUsers, getUser } from "../API/user.js";
  
  import { getEmployees, getEmployeeById } from "../API/employee.js";
  
  import {
    postNewAppointment,
    getAppointments,
    deleteAppointment,
    getAppointment,
    updateAppointment,
  } from "../API/appointment.js";
  
  import { Appointment } from "./class.js";
  
  (function () {
    const greetin = document.querySelector("#welcome");
    const btnLogOut = document.querySelector("#logOut");
    const userSelect = document.querySelector("#id_user");
    const doctorSelect = document.querySelector("#id_employee");
    const formulario = document.querySelector("#formulario");
    const contenedorCitas = document.querySelector("#citas");
    const main = document.querySelector("#main");
    const modal = document.querySelector("#myModalAppointmentEdit");
    const closeModal = document.querySelector("#closeModalAppointmentEdit");
    const userSelectEdit = document.querySelector("#id_userEdit");
    const doctorSelectEdit = document.querySelector("#id_employeeEdit");
    const formularioEdit = document.querySelector('#formularioEdit');
  
    document.addEventListener("DOMContentLoaded", async () => {
      const dataUser = await anyToken();
      console.log(dataUser);
  

  
      async function printAppointments() {
        // Consultar a la API
        const appointments = await getAppointments(dataUser);
        console.log(appointments);
  
        // Recorremos todas las citas
        appointments.forEach(async (appointment) => {
          const { id_appointment, id_user, id_employee, date, time, motivo } =
            appointment;
  
          // Consultamos a las API para obtener el nombre y email del doctor y usuario
          const user = await getUser(dataUser, id_user);
  
          const doctor = await getEmployeeById(dataUser, id_employee);
  
          // Destructuring a la respuestas obtenidas por las API
          const { email, userName } = user;
          const { name } = doctor;
  
          const divCita = document.createElement("div");
          divCita.classList.add(
            "cita",
            "p-3",
            "border",
            "border-gray-300",
            "rounded",
            "shadow-md",
            "my-4",
            "bg-white"
          );
  
          divCita.dataset.id = id_appointment;
  
          // Scripting de los elementos de la cita
          const emailParrafo = document.createElement("h2");
          emailParrafo.classList.add("card-title", "font-bold", "text-xl");
          emailParrafo.textContent = userName;
  
          const doctorParrafo = document.createElement("p");
          doctorParrafo.classList.add("font-semibold", "mb-2");
          doctorParrafo.textContent = `Doctor: ${name}`;
  
          const dateParrafo = document.createElement("p");
          dateParrafo.classList.add("font-semibold", "mb-2");
          dateParrafo.textContent = `Fecha de cita: ${date}`;
  
          const timeParrafo = document.createElement("p");
          timeParrafo.classList.add("font-semibold", "mb-2");
          timeParrafo.textContent = `Hora de cita: ${time}`;
  
          const motivoParrafo = document.createElement("p");
          motivoParrafo.classList.add("font-semibold", "mb-2");
          motivoParrafo.textContent = `Motivo: ${motivo}`;
  
          // Crear botón para eliminar citas
          const btnEliminar = document.createElement("button");
          btnEliminar.classList.add(
            "bg-red-500",
            "hover:bg-red-600",
            "text-white",
            "font-bold",
            "py-2",
            "px-4",
            "rounded",
            "mx-2"
          );
          btnEliminar.textContent = "Eliminar";
  
          // Eliminar la cita
          btnEliminar.onclick = () => deleteById(id_appointment);
  
          // Botón para editar una cita
          const btnEditar = document.createElement("button");
          btnEditar.classList.add(
            "bg-blue-500",
            "hover:bg-blue-600",
            "text-white",
            "font-bold",
            "py-2",
            "px-4",
            "rounded",
            "mr-2"
          );
          btnEditar.textContent = "Editar";
  
          // Editar cita
          btnEditar.onclick = () => editAppointment(id_appointment);
  
          // Agregar los párrafos y botones al divCita
          divCita.appendChild(emailParrafo);
          divCita.appendChild(doctorParrafo);
          divCita.appendChild(dateParrafo);
          divCita.appendChild(timeParrafo);
          divCita.appendChild(motivoParrafo);
          divCita.appendChild(btnEliminar);
          divCita.appendChild(btnEditar);
  
          // Agregar las citas al HTML
          contenedorCitas.appendChild(divCita);
        });
      }
  
      async function deleteById(id) {
        console.log(id);
        const confirmar = confirm("¿Deseas Eliminar el registro?");
        if (confirmar) {
          // Llamada a la API
          const confirmDelete = await deleteAppointment(dataUser, id);
          validateStatus(confirmDelete, "delete", "Cita", main);
          return;
        }
        console.log("No se elimino");
        return;
      }
  
  
      printAppointments();
      btnLogOut.addEventListener("click", deleteUserSession);
      printUserNameDoctor(dataUser, greetin);
    });
  })();
  