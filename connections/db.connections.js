const dbConfig = require("../config/config.js")
const Sequelize = require("sequelize");

const ToDoModel = require("../ToDo/todo.model.js");

const sequelize = new Sequelize( dbConfig["awsConfig "].database , dbConfig["awsConfig "].username , dbConfig["awsConfig "].password ,{
    host: dbConfig["awsConfig "].host,
    dialect: dbConfig["awsConfig "].dialect,
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