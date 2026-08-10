const{ octokit} = require('@octokit/rest');


require('dotenv').config()
 console.log(process.env.GITHUB_TOKEN);


module.exports = octokit;