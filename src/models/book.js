
const {DataTypes } = require('sequelize');
const {sequelize} = require('../config/dbConfig');
const BookShop = require('./bookShop');

const Book = sequelize.define("Books",{
    isbn:{
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        validate:{
            isIsbn: true,
        },        
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    author:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    year:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    library: {
        type: DataTypes.INTEGER,
        allowNull: false,

        references: {
            model: 'bookShop',          
            key: 'id',
        },    
    },
});

Book.belongsTo(BookShop, { foreignKey: 'library' });

module.exports = Book;