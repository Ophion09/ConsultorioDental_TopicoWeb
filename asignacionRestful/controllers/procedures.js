// controllers/procedures.js

const simulatedProcedures = [];

exports.getAllProcedures = (req, res) => {
    // Implementa la lógica para obtener todos los procedimientos y responder con los datos simulados
    res.status(200).json(simulatedProcedures);
}

exports.createProcedure = (req, res) => {
    const { nombre, precio, descuento } = req.body;
    // Implementa la lógica para crear un procedimiento y responder con el procedimiento creado
    // Agrega el nuevo procedimiento a `simulatedProcedures`
    const newProcedure = {
        id_procedimiento: simulatedProcedures.length + 1,
        nombre,
        precio,
        descuento
    };
    simulatedProcedures.push(newProcedure);
    res.status(201).json(newProcedure);
}

exports.getProcedureById = (req, res) => {
    const { id } = req.params;
    const procedure = simulatedProcedures.find(p => p.id_procedimiento === Number(id));
    if (procedure) {
        res.status(200).json(procedure);
    } else {
        res.status(404).json({ message: 'Procedimiento no encontrado' });
    }
}

exports.updateProcedure = (req, res) => {
    const { id } = req.params;
    const { nombre, precio, descuento } = req.body;
    const procedure = simulatedProcedures.find(p => p.id_procedimiento === Number(id));
    if (procedure) {
        procedure.nombre = nombre;
        procedure.precio = precio;
        procedure.descuento = descuento;
        res.status(200).json(procedure);
    } else {
        res.status(404).json({ message: 'Procedimiento no encontrado' });
    }
}

exports.deleteProcedure = (req, res) => {
    const { id } = req.params;
    const index = simulatedProcedures.findIndex(p => p.id_procedimiento === Number(id));
    if (index !== -1) {
        simulatedProcedures.splice(index, 1);
        res.status(200).json({ message: 'Procedimiento eliminado exitosamente' });
    } else {
        res.status(404).json({ message: 'Procedimiento no encontrado' });
    }
}
