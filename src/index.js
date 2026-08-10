const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/',(req,res) => {
    res.send("hello World")
}) 
console.log(process.env.PORT);
app.listen( PORT ,() => {
    console.log("server is running on:", `${ PORT }`)
});