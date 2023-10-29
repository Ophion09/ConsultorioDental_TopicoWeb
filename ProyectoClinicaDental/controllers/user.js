const Sequelize = require('sequelize').Sequelize;
const user = require('../models/user')

//obtener todos los usuarios
exports.getUsers = async (req, res) => {
    try {
        const users = await user.findAll(); 
        res.send(users)
    } catch (error) {
        res.send(error) 
    }
 }

//agregar usuario
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

 //obtener usario por id
exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const userCreated = await user.findByPk(id); 
        res.send(userCreated);
    } catch (error) {
        res.send(error);
    }
}

//eliminar usuario
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try{
      const deleted =  await user.destroy({
          where: {
            id_user:id
          }
       })
       res.status(201).json({
        status: 'succes'
       })
    }catch(error){
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
}

//actualizar usuario
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const userUpdapted = await user.update(req.body, {
            where: {
                id_user:id
            }
        });
        res.status(201).json({
            status: 'succes'
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}