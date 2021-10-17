const ToDo = require("../connections/db.connections").ToDo;
const sequelize = require("sequelize");

exports.create = (tododetails,callback) => {
    ToDo.create({
        text: tododetails.text,
        createdAt: new Date()
    }).then( result =>{
        callback(null,result);
    }).catch( error =>{
        callback(error,null);
    });
};


exports.create = (tododetails,callback) => {
    ToDo.create({
        text: tododetails.text,
        createdAt: new Date()
    }).then( result =>{
        callback(null,result);
    }).catch( error =>{
        callback(error,null);
    });
};

exports.findById = ( uuid , callback ) =>{
    ToDo.findAll({
        where: {
            id: uuid
        }
    }).then( result => {
        callback(null, result);
    }).catch( error => {
        callback( error, null);
    })
}

exports.giveAll = ( callback ) => {
    const allrecords = Todo.sequelize.query("SELECT * FROM Todos where id like `%`" , {
        type: sequelize.QueryTypes.SELECT
    });
    allrecords.then( result => {
        callback( null,result);
    }).catch( error => {
        callback( error,null);
    })
};