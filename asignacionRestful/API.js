// Archivo API.js
import { createProcedure, getAllProcedures } from "./controllers/procedures.js";

const url = 'http://localhost:4000/procedures';

// Consulta los procedimientos enlistados

export const obtenerProcedimientos = async () => {
    try {
        // API consulta
        const respuesta = await fetch(url);
        // API manda respuesta de la consulta al metodo, y lo almacena en resultado
        const resultado = await getAllProcedures(respuesta);
        return resultado;
    } catch (error) {
        console.log(error);
    }
}

// Agregar los procedimientos enlistados

export const agregarNuevoProcedimiento = async () => {
    try {
        // API consulta
        const respuesta = await fetch(url);
        // API manda respuesta de la consulta al metodo, y lo almacena en resultado
        const resultado = await createProcedure(respuesta);
        return resultado;
    } catch (error) {
        console.log(error);
    }
}