const url = "http://localhost:3000";
let userLoging = {};
import { cleanHTML, showAlert } from "../apps/funciones.js";

export const getUsers = async user => {
  const {email, token} = user;
  console.log(token);
  const main = document.querySelector('#main');
  try {
    const response = await fetch(`${url}/users`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': `${token}`
      }
    });
    
    const data = await response.json();
    if(response.status === 401) {
      console.log('Token invalido');
      showAlert('Sesion Expirada', 'error', main);
       setTimeout(() => {
         window.location.href = '../views/login.html';
       }, 3000);
      return;
    } else {
      return data;
      // Si todo sale bien, regresa data, que es la respuesta obtenida del fetch pero convertida a json
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    //showAlert('Servidor Caido', 'ERROR', formulario)
    return;
  }

}

export const deleteUser = async (user, idUser) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/users/${idUser}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
          'Authorization': `${token}`
      },
      body: JSON.stringify(idUser)
    });
    const data = await response.json();
    if(response.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return;
  }
}

export const postUser = async (dataUser,user) => {
  console.log(user);
  const {email, token} = dataUser;
  try {
    const response = await fetch(`${url}/users`, {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
      },
      body: JSON.stringify(user)
    });
    
    const data = await response.json();
    console.log(data); // Para ver la respuesta del servidor en la consola

    // Si la respuesta es exitosa, entonces redirige
    if (response.ok) {
    userLoging = user;
    window.location.href = '../views/user.html';

    return true;
    } else {
      console.error('Error al enviar los datos:', response.status);
      showAlert('Error al enviar los datos', 'error', formulario);
      const errorData = await response.json();
      console.error('Mensaje de error:', errorData.message);
      return false;
    }
  } catch (error) {
    console.log(error);
    return response.status;
  }
}

export const TypeEnum = {
  Normal: 1,
  Doctor: 2,
  Administrador: 3,
}

export function typeOptionsSelected(selectElement, selectedType) {
  //Limpia las opciones exisistentes
  selectElement.innerHTML = '';

  // Añade opciones basadas en genderEnum
  for (const key in TypeEnum) {
    const option = document.createElement('option');
    option.value = TypeEnum[key];
    option.textContent = key;
    // Seleccionar la opción correspondiente
    if (selectedType === key) {
      option.selected = true;
    }
    selectElement.appendChild(option);
  }
}
