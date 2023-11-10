const boton = document.querySelector('#boton');
boton.addEventListener('submit', () => {
    const user = {
        email: 'admin',
        password: 'admin'
      };

      const url = 'http://localhost:3000/auth'; // Ruta a la que queremos enviar la solicitud
  
      async function sendUserToServer(user) {
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log('Token recibido:', data.token); // Suponiendo que la respuesta contenga un token
            // Hacer algo con el token recibido, como guardar en localStorage, etc.
          } else {
            console.error('Error al enviar los datos:', response.status);
            const errorData = await response.json();
            console.error('Mensaje de error:', errorData.message);
          }
        } catch (error) {
          console.error('Error en la solicitud:', error);
        }
      }
    
    
      sendUserToServer(user);
      
})


  
  