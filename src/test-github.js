const{ Octokit} = require('@octokit/rest');
const { StatusCodes } = require('http-status-codes');
require('dotenv').config()

// 
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
});

async function fetchUserEvents() {
    const response = await octokit.request(
        'GET /users/{username}/events/public',
        {
            username: 'parthsawang'
        }
    );

    return response.data;
}

fetchUserEvents()
    .then(data => console.log(data))
    .catch(err => console.error(err));
