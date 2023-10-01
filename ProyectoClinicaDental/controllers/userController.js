const Sequelize = require('sequelize').Sequelize;
const User = require('../models/userModel')

//agregar usuario
exports.addUser = async (correo, contrasena) =>{
    try {
       const result = await User.create({
           correo: correo,
           contrasena: contrasena,
        })
    }catch(err){
       console.log(err);
       throw error; 
    }
}

//obtener todos los usuarios
exports.getUsers = async () => {
    try {
        const users = await User.findAll(); 
        return users;
    } catch (error) {
        console.error('Error al buscar usuarios:', error);
        throw error; 
    }
 }

 //obtener usario por id
exports.getUserById = async (id) => {
    try {
        const user = await User.findByPk(id); 
        return user;
    } catch (error) {
        console.error('Error al buscar usuarios:', error);
        throw error; 
    }
}

//obtener usario por correo electronico
exports.getUserByEmail = async (correo) => {
    try {
        const user = await User.findCreateFind(id); 
        return user;
    } catch (error) {
        console.error('Error al buscar usuarios:', error);
        throw error; 
    }
 }