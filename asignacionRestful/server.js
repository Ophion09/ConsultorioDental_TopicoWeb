const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el paquete cors
const proceduresRoutes = require('./routes/procedures.js');

const app = express();
const port = 4000; // Puerto en el que se ejecutará tu servidor

app.use(cors()); // Habilita CORS para todas las rutas
app.use(bodyParser.json());
app.use('/procedures', proceduresRoutes);

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
