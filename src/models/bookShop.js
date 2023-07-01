const {DataTypes } = require('sequelize');
const {sequelize} = require('../config/dbConfig');

const BookShop = sequelize.define("BookShops",{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    location:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    telephone:{
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = BookShop;