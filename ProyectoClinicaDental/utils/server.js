// server.js
const express = require('express');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const procedureRouter = require('../routes/procedures');
const userRouter = require('../routes/users');
const patientRouter = require('../routes/patients');
const paymentsRouter = require('../routes/payments');
const medicalRecordRouter = require('../routes/medicalRecords');
const medicalNotesRouter = require('../routes/medicalNotes');
const medicalNotesProceduresRouter = require('../routes/medicalNotesProcedures');
const accountRouter = require('../routes/account');
const rolesRouter = require('../routes/role');
const authRouter = require('../routes/auth');
const employeeRouter = require('../routes/employee');
const appError = require('./appError');

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

app.use(express.json());

app.use('/procedures', procedureRouter);

app.use('/users', userRouter);

app.use('/patients', patientRouter);

app.use('/payments', paymentsRouter);

app.use('/medicalRecords', medicalRecordRouter);

app.use('/medicalNotes', medicalNotesRouter);

app.use('/medicalNotesProcedures', medicalNotesProceduresRouter);

app.use('/account', accountRouter);

app.use('/roles', rolesRouter);

app.use('/employees', employeeRouter);

app.use('/auth', authRouter);

app.all('*', (req, resp, next) =>{
  next(new appError(`No se pudo acceder a ${req.originalUrl} en el servidor, 404`));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Aplicación en ejecución en el puerto ${port}`);
});
