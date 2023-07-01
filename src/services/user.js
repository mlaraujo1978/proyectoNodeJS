const userProvider = require("../providers/userProvider");

const getUser = async(id) =>{
    return await userProvider.getUser(id);
};


const getUsers = async(firstName, email) =>{

    return await userProvider.getUsers(firstName, email);
};

const createUser = async (user) =>{
    return await userProvider.createUser(user);
};

const updateUser = (id, user) =>{
    // llamada al provider con el objeto user
    return user;
};

const deleteUser = (id) =>{
      // llamada al provider con el id
    return "Adios usuario: "+id;
};

const queryUser = (name) =>{};

module.exports = {getUser, getUsers,createUser, updateUser, deleteUser};