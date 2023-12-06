const {DataTypes} = require('sequelize')
const sequelize = require('../config/configuration')

const CategoriesModel = sequelize.define('categories',{
    id:{
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:true
    },
    entries:{
        type: DataTypes.STRING,
        allowNull:true
    },
    description:{
        type: DataTypes.STRING,
        allowNull:true
    },
})

module.exports = CategoriesModel