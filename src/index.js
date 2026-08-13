const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const Octokit = require('./test-github')

const PORT = process.env.PORT || 4000;

app.get('/',(req,res) => {
    
}) 
console.log(process.env.PORT);
app.listen( PORT ,() => {
    console.log("server is running on:", `${ PORT }`)
});