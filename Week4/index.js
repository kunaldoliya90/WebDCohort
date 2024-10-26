const express = require("express");
const app = express();

// Route Hamdlers
app.get('/', function(req, res){
    res.send("Hello world.");
})

app.post('/', function(req, res){
    res.send("This is post request.");
})

app.put('/', function(req, res){
    res.send("This is put request.");
})

console.log("Server started at port 3000")
app.listen(3000);