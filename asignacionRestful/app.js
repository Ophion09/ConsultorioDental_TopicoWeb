// app.js

const url = 'http://localhost:4000/procedures';

// Función para crear un procedimiento
async function crearProcedimiento(procedimiento) {
    const respuesta = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(procedimiento),
    });
    if (respuesta.status === 201) {
        const nuevoProcedimiento = await respuesta.json();
        console.log('Procedimiento creado con éxito:', nuevoProcedimiento);
    } else {
        const error = await respuesta.json();
        console.error('Error al crear el procedimiento:', error);
    }
}

// Ejemplo de cómo crear un nuevo procedimiento
const nuevoProcedimiento = {
    nombre: 'Nuevo Procedimiento',
    precio: 100.0,
    descuento: 10.0,
};

crearProcedimiento(nuevoProcedimiento);
