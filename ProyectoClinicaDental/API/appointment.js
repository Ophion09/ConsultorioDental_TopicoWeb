const url = "http://localhost:3000";
let userLoging = {};
import { cleanHTML, showAlert } from "../apps/funciones.js";

export const postNewAppointment = async (user, appointment) => {
    const {email, token} = user;
    try {
        const response = await fetch(`${url}/appointments`, {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
            body: JSON.stringify(appointment),
          });
      
          const data = await response.json();
          console.log(data);
          return data;
    } catch (error) {
        return;
    }
};

export const getAppointments = async (user) => {
    const { email, token } = user;
    try {
        const response = await fetch(`${url}/appointments`, {
            method: "GET",
            mode: "cors",
            headers: {
              Authorization: `${token}`,
            },
          });
      
          const data = await response.json();
          return data;
    } catch (error) {
        return;
    }
}