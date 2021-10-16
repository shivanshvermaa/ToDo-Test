const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use("/todo" , require("./ToDo/todo.router"));

app.get('/', function(req, res) {
    res.send('hello world');
  });

app.listen( PORT , () =>{
    console.log(`Application running in  ${PORT}`);
}); 