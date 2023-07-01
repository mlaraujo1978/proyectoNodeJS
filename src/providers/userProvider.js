const { Op } = require("sequelize");
const {User} = require('../models');

const createUser = async (userOptions) =>{
    try{
        const newUser = await User.create(userOptions);
        return newUser;
    }catch(error){
    throw error;   
    }
};

const getUser = async (id) =>{
    try{
        const user = await User.findByPk(id);
        if(user){
            return user;
        }else{
            throw new Error("Usuario no encontrado");
        }        
    }catch(error){
    throw error;   
    }
}

const getUsers = async (firstName, email) =>{
    try{
        const users = await User.findAll({ where: {[Op.and] : [{firstName}, {email}]} });
        if(users){
            return users;
        }else{
            "No se encontraron los usuarios con ese criterio de busqueda";
            //throw new Error("No se encontraron los usuarios con ese criterio de busqueda");
        }        
    }catch(error){
    throw error;   
    }
}

const getUsersB = async (options) =>{
    try{
        const users = await User.findAll({options});
        if(users){
            return users;
        }else{
            throw new Error("No se encontraron los usuarios con nese criterio de busqueda");
        }        
    }catch(error){
    throw error;   
    }
}

module.exports ={
    createUser, 
    getUser,
    getUsers,
    getUsersB,
};