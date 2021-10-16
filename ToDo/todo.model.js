const Sequelize = require("sequelize");
module.exports = (sequelize,DataTypes) => {
    const Todo = sequelize.define('Todo',{
        
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },

        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },

        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            onUpdate : DataTypes.NOW,
        }
    });
    return Todo;
    
};