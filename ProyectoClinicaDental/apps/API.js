const url = 'http://localhost:3000/';
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
          const errorData = await response.json();
          console.error('Mensaje de error:', errorData.message);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        //showAlert('Servidor Caido', 'ERROR', formulario)
      }

}
export {userLoging};

export const getUserByToken = async user => {
  const {email, token} = user;
  console.log(token);
  const main = document.querySelector('#main');
  try {
    const response = await fetch(`${url}employees`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': `${token}`
      }
    });
    
    const data = await response.json();
    console.log(data); // Para ver la respuesta del servidor en la consola

    if(response.status === 401) {
      console.log('Token invalido');
      showAlert('Sesion Expirada', 'error', main);
      // setTimeout(() => {
      //   window.location.href = '../views/login.html';
      // }, 3000);
      return;
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    //showAlert('Servidor Caido', 'ERROR', formulario)
  }

}