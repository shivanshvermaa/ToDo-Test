const todo = require("./todo.dao");
const todoModel = require("./todo.model");

exports.create = (req,res) => {

    if(!req.body){
        res.status(400).send({
            status: false,
            message: "Request body cannot be empty"
        });
    }

    todo.create( req.body , (error,result) =>{
        
        if(error){
            res.status(500).send({
                status: false,
                message: error
            });
        }
        else{
            res.status(200).send({
                status: true,
                data: result,
            });
        }

    });
}

exports.findById = (req,res) => {

    if(!req.params.id){
        res.status(400).send({
            status: false,
            message: "Id cannot be null"
        });
    }

    todo.findById( req.params.id , (error,result) =>{
        
        if(error){
            res.status(500).send({
                status: false,
                message: error
            });
        }
        else{
            res.status(200).send({
                status: true,
                data: result,
            });
        }

    });
}

exports.giveAll = (req,res) =>{

    todo.alldata( "test",(error,result) =>{

        if(error){
            res.status(500).send({
                status: false,
                message: error
            });
        }
        else{
            res.status(200).send({
                status: true,
                data: result,
            });
        }

    });
}