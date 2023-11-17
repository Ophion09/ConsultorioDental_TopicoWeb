<<<<<<< HEAD
const Sequelize = require('sequelize').Sequelize;
const user = require('../models/user')
=======
const Sequelize = require("sequelize").Sequelize;
const user = require("../models/user");
>>>>>>> 0b0b61bf5b93e2e36aabe80e601b4a6e728365c6
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

//obtener todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await user.findAll();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};

//agregar usuario
<<<<<<< HEAD
exports.addUser = async (req, res) =>{
    try {
       const answer = await user.create(req.body);
       res.status(201).json({
        status: 'succes'
       })
    } catch (err) {
       res.status(400).json({
          status: 'fail',
          message: err
       });
   }
}
// ejempl del middleware de errores 
 //obtener usario por id
exports.getUserById = catchAsync(async (req, res,next) => {
        const { id } = req.params;
        const userCreated = await user.findByPk(id);
        if(!userCreated){
            return next(new AppError('No se encontro usario con esa id', 404));
        } 
        res.send(userCreated);
=======
exports.addUser = async (req, res) => {
  try {
    const answer = await user.create(req.body);
    res.status(201).json({
      status: "succes",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// ejempl del middleware de errores
//obtener usario por id
exports.getUserById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const userCreated = await user.findByPk(id);
  if (!userCreated) {
    return next(new AppError("No se encontro usario con esa id", 404));
  }
  res.send(userCreated);
>>>>>>> 0b0b61bf5b93e2e36aabe80e601b4a6e728365c6
});

//eliminar usuario
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await user.destroy({
      where: {
        id_user: id,
      },
    });
    res.status(201).json({
      status: "succes",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

//actualizar usuario
<<<<<<< HEAD
exports.updateUser = catchAsync(async (req, res) => {
    const { id } = req.params;
        const userUpdapted = await user.update(req.body, {
            where: {
                id_user:id
            }
        });

        if(!userUpdapted){
            return next(new AppError('No se encontro usario con esa id', 404));
        } 
        
        res.status(201).json({
            status: 'succes'
        })
})
=======
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userUpdapted = await user.update(req.body, {
      where: {
        id_user: id,
      },
    });
    res.status(201).json({
      status: "succes",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
>>>>>>> 0b0b61bf5b93e2e36aabe80e601b4a6e728365c6
