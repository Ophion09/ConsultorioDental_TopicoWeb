const express = require('express');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const procedureRouter = require('../routes/procedures')
dotenv.config({ path: './config.env' });

const app = express();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  logging: false, // Puedes quitar esto si deseas ver los logs de SQL en la consola
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado correctamente a la base de datos MySQL');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

// Aquí puedes configurar tus rutas y middleware Express
// Ejemplo: app.use('/api', require('./routes/api'));

app.use('/procedures', procedureRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Aplicación en ejecución en el puerto ${port}`);
});
