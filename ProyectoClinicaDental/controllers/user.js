const Sequelize = require('sequelize').Sequelize;
const user = require('../models/user')

//agregar usuario
exports.addUser = async (userData) =>{
    try {
       const answer = await user.create(userData);
    }catch(err){
       throw err; 
    }
}

//obtener todos los usuarios
exports.getUsers = async () => {
    try {
        const users = await user.findAll(); 
        return users;
    } catch (error) {
        throw error; 
    }
 }

 //obtener usario por id
exports.getUserById = async (id) => {
    try {
        const users = await user.findByPk(id); 
        console.log(JSON.stringify(users, null, 2))
        return users;
    } catch (error) {
        throw error; 
    }
}

//obtener usario por correo electronico
exports.getUserByEmail = async (email) => {
    try {
        const users = await user.findOne({
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
      const deleted =  await user.destroy({
          where: {
            id_user:id
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
      const deleted =  await user.destroy({
          where: {
             email:email
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
        const userUpdapted = await user.update(newValues, {
            where: {
                id_user:id
            }
        });
        return userUpdapted;
    } catch (error) {
        throw error;
    }
}