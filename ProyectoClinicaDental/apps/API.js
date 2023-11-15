const url = 'http://localhost:3000';
let userLoging = {};
import { cleanHTML, showAlert } from "./funciones.js";
// cuando se logea un usuario administrador
export const login = async user => {
    try {
        const response = await fetch(`${url}/auth`, {
          method: 'POST',
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        });
        
        const data = await response.json();
        console.log(data); // Para ver la respuesta del servidor en la consola
    
        // Si la respuesta es exitosa, entonces redirige
        if (response.ok) {
            user.token = data.token; // Aqui al user le metemos token
            // enviar el token al mismo usuario correspondiente en la bd
            console.log(user);
        userLoging = user;
        window.location.href = '../views/administration.html';

        return user;
        } else {
          console.error('Error al enviar los datos:', response.status);
          showAlert('Credenciales Invalidas', 'error', formulario);
          const errorData = await response.json();
          console.error('Mensaje de error:', errorData.message);
          return;
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        showAlert('Servidor Caido', 'error', formulario)
      }

}

export const postNewUser = async user => {
  try {
    const response = await fetch(`${url}/users`, {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    });
    
    const data = await response.json();
    console.log(data); // Para ver la respuesta del servidor en la consola

    // Si la respuesta es exitosa, entonces redirige
    if (response.ok) {
    return true;
    } else {
      console.error('Error al enviar los datos:', response.status);
      const errorData = await response.json();
      console.error('Mensaje de error:', errorData.message);
      return false;
    }
  } catch (error) {
    console.log(error);
    return response.status;
  }
}
export {userLoging};

export const getUserByToken = async user => {
  const {email, token} = user;
  console.log(token);
  const main = document.querySelector('#main');
  try {
    const response = await fetch(`${url}/employees`, {
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

/**
 * Metodo para obtener todos los roles
 * @param {*} user 
 * @returns Respuesta del server
 */
export const getDataByRole = async user => {
  //
  const {email, token} = user;
  console.log(token);
  try {
    const response = await fetch(`${url}/roles`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': `${token}`
      }
    });

    const data = await response.json(); // Respuesta en el formato que nos interesa
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
    console.log(error);
  }
}

/**
 * Metodo para obtener todos las especialidades
 * @param {*} user 
 * @returns respuesta del server
 */
export const getDataBySpecialty = async user => {
  //
  const {email, token} = user;
  console.log(token);
  try {
    const response = await fetch(`${url}/specialtys`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': `${token}`
      }
    });

    const data = await response.json(); // Respuesta en el formato que nos interesa
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
    console.log(error);
  }
}

export const postEmployee = async (user, employee) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/employees`, {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
      },
      body: JSON.stringify(employee)
    });
    
    const data = await response.json();
    console.log(data); // Para ver la respuesta del servidor en la consola

    // Si la respuesta es exitosa, entonces redirige
    if (response.ok) {
    userLoging = user;
    window.location.href = '../views/administration.html';

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

export const deleteEmployee = async (user, Idemployee) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/employees/${Idemployee}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
          'Authorization': `${token}`
      },
      body: JSON.stringify(Idemployee)
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