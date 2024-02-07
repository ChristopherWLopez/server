const express = require('express');

const server = express();

//this server is  corrent when:

server.get('/hello', (_, res)=> res.send('hello!'));

server.get('/goodbye', (_,res)=> res.send('goodbye'));

server.get('/person', (_,res)=> res.send("Gandalf"));

module.exports = server;

