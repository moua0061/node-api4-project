const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
    <h1> Welcome to my Heroku App! </h1>
    <p> Please try one of the endpoints to get your database to display =) </p>
    `)
})

module.exports = server;