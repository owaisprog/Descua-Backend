const {DataTypes} = require('sequelize')
const sequelize = require('../config/configuration')

const promptsModel = sequelize.define('prompts',{
    id:{
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false
    },
    statement:{
        type: DataTypes.STRING,
        allowNull:false
    },
    date:{
        type: DataTypes.STRING,
        allowNull:false
    },
})

module.exports = promptsModel