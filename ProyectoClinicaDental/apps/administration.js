import { userLoging } from "./API";

document.addEventListener('DOMContentLoaded', () => {
    // Otro archivo donde necesitas el token

// Espera hasta que se complete el login antes de intentar acceder al token
if (userLoging) {
  const token = userLoging.token;
  // Usa el token para hacer solicitudes en otras rutas
} else {
  // El usuario no ha iniciado sesión o no se ha obtenido el token aún
}

})