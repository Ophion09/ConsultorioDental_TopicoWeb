const url = "http://localhost:3000";
let userLoging = {};
import { cleanHTML, showAlert } from "./funciones.js";
// cuando se logea un usuario administrador
export const login = async (user) => {
  try {
    const response = await fetch(`${url}/auth`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    console.log(data); // Para ver la respuesta del servidor en la consola

    // Si la respuesta es exitosa, entonces redirige
    if (response.ok) {
      //     user.token = data.token; // Aqui al user le metemos token
      //     // enviar el token al mismo usuario correspondiente en la bd
      //     console.log(user);
      // userLoging = user;
      return data;
    } else {
      console.error("Error al enviar los datos:", response.status);
      showAlert("Credenciales Invalidas", "error", formulario);
      const errorData = await response.json();
      console.error("Mensaje de error:", errorData.message);
      return;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    showAlert("Servidor Caido", "error", formulario);
  }
};

export const postNewUser = async (user) => {


  try {
    const response = await fetch(`${url}/users`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    console.log(data); // Para ver la respuesta del servidor en la consola

    // Si la respuesta es exitosa, entonces redirige
    if (response.ok) {
      return true;
    } else {
      console.error("Error al enviar los datos:", response.status);
      const errorData = await response.json();
      console.error("Mensaje de error:", errorData.message);
      return false;
    }
  } catch (error) {
    console.log(error);
    return response.status;
  }
};
export { userLoging };

export const getEmployees = async (user) => {
  const { email, token } = user;
  console.log(token);
  const main = document.querySelector("#main");
  try {
    const response = await fetch(`${url}/employees`, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
      },
    });

    const data = await response.json();
    if (response.status === 401) {
      console.log("Token invalido");
      showAlert("Sesion Expirada", "error", main);
      setTimeout(() => {
        window.location.href = "../views/login.html";
      }, 3000);
      return;
    } else {
      return data;
      // Si todo sale bien, regresa data, que es la respuesta obtenida del fetch pero convertida a json
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    //showAlert('Servidor Caido', 'ERROR', formulario)
    return;
  }
};

export const getEmployeeById = async (user, id) => {
  const { email, token } = user;
  try {
    const response = await fetch(`${url}/employees/${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const updateEmployeeById = async (user, id, updateData) => {
  const { email, token } = user;
  try {
    const response = await fetch(`${url}/employees/${id}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Metodo para obtener todos los roles
 * @param {*} user
 * @returns Respuesta del server
 */
export const getDataByRole = async (user) => {
  //
  const { email, token } = user;
  console.log(token);
  try {
    const response = await fetch(`${url}/roles`, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
      },
    });

    const data = await response.json(); // Respuesta en el formato que nos interesa
    if (response.status === 401) {
      console.log("Token invalido");
      showAlert("Sesion Expirada", "error", main);
      setTimeout(() => {
        window.location.href = "../views/login.html";
      }, 3000);
      return;
    } else {
      return data;
      // Si todo sale bien, regresa data, que es la respuesta obtenida del fetch pero convertida a json
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * Metodo para obtener todos las especialidades
 * @param {*} user
 * @returns respuesta del server
 */
export const getDataBySpecialty = async (user) => {
  //
  const { email, token } = user;
  console.log(token);
  try {
    const response = await fetch(`${url}/specialtys`, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
      },
    });

    const data = await response.json(); // Respuesta en el formato que nos interesa
    if (response.status === 401) {
      console.log("Token invalido");
      showAlert("Sesion Expirada", "error", main);
      setTimeout(() => {
        window.location.href = "../views/login.html";
      }, 3000);
      return;
    } else {
      return data;
      // Si todo sale bien, regresa data, que es la respuesta obtenida del fetch pero convertida a json
    }
  } catch (error) {
    console.log(error);
  }
};

export const getNameByUser = async (user) => {
  const { email, token } = user;
  try {
    const response = await fetch(`${url}/users`, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
      },
    });

    const data = await response.json(); // Respuesta de la consulta a la API

    if (response.status === 401) {
      console.log("Token invalido");
      showAlert("Sesion Expirada", "error", main);
      setTimeout(() => {
        window.location.href = "../views/login.html";
      }, 3000);
      return;
    } else {
      return data;
      // Si todo sale bien, regresa data, que es la respuesta obtenida del fetch pero convertida a json
    }
  } catch (error) {}
};

export const postEmployee = async (user, employee) => {
  const { email, token } = user;
  try {
    const response = await fetch(`${url}/employees`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(employee),
    });

    const data = await response.json();
    console.log(data); // Para ver la respuesta del servidor en la consola

    // Si la respuesta es exitosa, entonces redirige
    if (response.ok) {
      userLoging = user;
      window.location.href = "../views/administration.html";

      return true;
    } else {
      console.error("Error al enviar los datos:", response.status);
      showAlert("Error al enviar los datos", "error", formulario);
      const errorData = await response.json();
      console.error("Mensaje de error:", errorData.message);
      return false;
    }
  } catch (error) {
    console.log(error);
    return response.status;
  }
};

export const deleteEmployee = async (user, Idemployee) => {
  const { email, token } = user;
  try {
    const response = await fetch(`${url}/employees/${Idemployee}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
      },
      body: JSON.stringify(Idemployee),
    });
    const data = await response.json();
    if (response.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getRoles = async (user) => {
  const { email, token } = user;
  console.log(token);
  const main = document.querySelector("#main");
  try {
    const response = await fetch(`${url}/roles`, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
      },
    });

    const data = await response.json();
    if (response.status === 401) {
      console.log("Token invalido");
      showAlert("Sesion Expirada", "error", main);
      setTimeout(() => {
        window.location.href = "../views/login.html";
      }, 3000);
      return;
    } else {
      return data;
      // Si todo sale bien, regresa data, que es la respuesta obtenida del fetch pero convertida a json
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    //showAlert('Servidor Caido', 'ERROR', formulario)
    return;
  }
};

export const getRoleById = async (user, idRole) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/roles/${idRole}`, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
      },
    });

    const data = await response.json();
    if (response.status === 401) {
      console.log("Token invalido");
      showAlert("Sesion Expirada", "error", main);
      setTimeout(() => {
        window.location.href = "../views/login.html";
      }, 3000);
      return;
    } else {
      return data;
      // Si todo sale bien, regresa data, que es la respuesta obtenida del fetch pero convertida a json
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    //showAlert('Servidor Caido', 'ERROR', formulario)
    return;
  }
};

export const postNewRole = async (user, role) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/roles`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(role),
    });

    const data = await response.json();
    console.log(data); // Para ver la respuesta del servidor en la consola

    // Si la respuesta es exitosa, entonces redirige
    if (response.ok) {
      return true;
    } else {
      console.error("Error al enviar los datos:", response.status);
      const errorData = await response.json();
      console.error("Mensaje de error:", errorData.message);
      return false;
    }
  } catch (error) {
    console.log(error);
    return response.status;
  }
};

export const deleteRole = async (user, idRole) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/roles/${idRole}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
      },
      body: JSON.stringify(idRole),
    });
    const data = await response.json();
    if (response.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const updateRole = async (user, idRole, updateData) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/roles/${idRole}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSpecialtys = async (user) => {
  const { email, token } = user;
  try {
    const response = await fetch(`${url}/specialtys`, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
      },
    });

    const data = await response.json();

    if (response.status === 401) {
      console.log("Token invalido");
      return;
    } else {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSpecialty = async (user, idSpecialty) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/specialtys/${idSpecialty}`, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
      },
    });

    const data = await response.json();
    if (response.status === 401) {
      console.log("Token invalido");
      showAlert("Sesion Expirada", "error", main);
      setTimeout(() => {
        window.location.href = "../views/login.html";
      }, 3000);
      return;
    } else {
      return data;
      // Si todo sale bien, regresa data, que es la respuesta obtenida del fetch pero convertida a json
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postNewSpecialty = async (user, specialty) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/specialtys`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(specialty),
    });

    const data = await response.json();
    console.log(data); // Para ver la respuesta del servidor en la consola

    // Si la respuesta es exitosa, entonces redirige
    if (response.ok) {
      return data;
    } else {
      console.error("Error al enviar los datos:", response.status);
      const errorData = await response.json();
      console.error("Mensaje de error:", errorData.message);
      return data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteSpecialty = async (user, idSpecialty) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/specialtys/${idSpecialty}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
      },
      body: JSON.stringify(idSpecialty),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateSepcialty = async (user, idSpecialty, updateData) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/specialtys/${idSpecialty}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
  
  export const getPatients = async user => {
  const {email, token} = user;
  console.log(token);
  const main = document.querySelector('#main');
  try {
    const response = await fetch(`${url}/patients`, {
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

export const getPatientById = async (user, id) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/patients/${id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': `${token}`
      }
    });
    
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return;
  }
    
}

export const updatePatientById = async (user, id, updateData) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/patients/${id}`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const postPatient = async (user, patient) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/patients`, {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
      },
      body: JSON.stringify(patient)
    })
    
    const data = await response.json();
    console.log(data); // Para ver la respuesta del servidor en la consola

    // Si la respuesta es exitosa, entonces redirige
    if (response.ok) {
    userLoging = user;
    window.location.href = '../views/patient.html';

    return true;
    } else {
      console.error('Error al enviar los datos:', response.status);
      showAlert('Error al enviar los datos', 'error', formulario);//linea 400
      const errorData = await response.json();
      console.error('Mensaje de error:', errorData.message);
      return false;
    }
  } catch (error) {
    console.log(error);
    return;//linea 4
  }
}

export const deletePatient = async (user, Idpatient) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/patients/${Idpatient}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
          'Authorization': `${token}`
      },
      body: JSON.stringify(Idpatient)
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

export const GenderEnum = {
  Masculino: 1,
  Femenino: 2,
  Otro: 3,
}

export const getProcedures = async user => {
  const {token} = user;
  console.log(token);
  const main = document.querySelector('#main');
  try {
    const response = await fetch(`${url}/procedures`, {
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

export const deleteProcedure = async (user, idProcedure) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/procedures/${idProcedure}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
          'Authorization': `${token}`
      },
      body: JSON.stringify(idProcedure)
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

export const postProcedure = async (user, procedure) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/procedures`, {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
      },
      body: JSON.stringify(procedure)
    })
    
    const data = await response.json();
    console.log(data); // Para ver la respuesta del servidor en la consola

    // Si la respuesta es exitosa, entonces redirige
    if (response.ok) {
    userLoging = user;
    window.location.href = '../views/procedure.html';

    return true;
    } else {
      console.error('Error al enviar los datos:', response.status);
      showAlert('Error al enviar los datos', 'error', formulario);//linea 400
      const errorData = await response.json();
      console.error('Mensaje de error:', errorData.message);
      return false;
    }
  } catch (error) {
    console.log(error);
    return response.status;//linea 4
  }
}

export const getProcedureById = async (user, id) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/procedures/${id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': `${token}`
      }
    });
    
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return;
  }
    
}

export const updateProcedureById = async (user, id, updateData) => {
  const {email, token} = user;
  try {
    const response = await fetch(`${url}/procedures/${id}`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

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
