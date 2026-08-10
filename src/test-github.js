const{ Octokit} = require('@octokit/rest');
require('dotenv').config()

// 
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
});


module.export = Octokit;