const dbConfig = require("../config/config.json")
const Sequelize = require("sequelize");

const ToDoModel = require("../ToDo/todo.model.js");

const sequelize = new Sequelize( dbConfig.development.database , dbConfig.development.username , dbConfig.development.password ,{
    host: dbConfig.development.host,
    dialect: dbConfig.development.dialect,
    operatorsAliases: 0,
});

const ToDo = ToDoModel(sequelize,Sequelize);

sequelize.sync({force:false})
  .then(() => {
    console.log(`Database & tables created!`)
  });

module.exports = {
    ToDo
};