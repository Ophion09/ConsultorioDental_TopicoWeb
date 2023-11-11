const url = 'http://localhost:3000/auth';
let userLoging = {};

// cuando se logea un usuario administrador
export const login = async user => {
    try {
        const response = await fetch(url, {
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
            console.log(user);
        userLoging = user;
        window.location.href = '../views/administration.html';

        return data.token;
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
