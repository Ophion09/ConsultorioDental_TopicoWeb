const Sequelize = require('sequelize').Sequelize;
const User = require('../models/user')

//agregar usuario
exports.addUser = async (email, Password) =>{
    try {
       const result = await User.create({
           correo: email,
           contrasena: Password,
        })
    }catch(err){
       throw err; 
    }
}

//obtener todos los usuarios
exports.getUsers = async () => {
    try {
        const users = await User.findAll(); 
        return users;
    } catch (error) {
        throw error; 
    }
 }

 //obtener usario por id
exports.getUserById = async (id) => {
    try {
        const user = await User.findByPk(id); 
        return user;
    } catch (error) {
        throw error; 
    }
}

//obtener usario por correo electronico
exports.getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({
            where: {
                correo: email
            }
        });
        return user;
    } catch (error) {
        throw error; 
    }
 }

//eliminar usuario
exports.deleteUser = async (id) => {
    try{
      const deleted =  await User.destroy({
          where: {
             id_usuario:id
          }
       })
       return deleted;
    }catch(error){
       throw error;
    }
}

// eliminar usario por email
exports.deleteUserByEmail = async (email) => {
    try{
      const deleted =  await User.destroy({
          where: {
             correo:email
          }
       })
       return deleted;
    }catch(error){
       throw error;
    }
}

//actualizar usuario
exports.updateUser = async (id, newValues) => {
    try {
        const userUpdapted = await User.update(newValues, {
            where: {
                id_usuario:id
            }
        });
        return userUpdapted;
    } catch (error) {
        throw error;
    }
}