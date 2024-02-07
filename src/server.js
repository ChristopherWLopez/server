const express = require('express');

const server = express();

//this server is  corrent when:

server.get('/hello', (_, res)=> res.send('hello!'));

server.get('/goodbye', (_,res)=> res.send('goodbye'));

server.get('/person', (_,res)=> res.send("Gandalf"));

const nameValidator = (req,res,next) =>{
    if(req.query.name){
        req.name = req.query.name;
        next();
    }else{
        next('Failed validation: No name in query');
    }
};

server.use(nameValidator);

server.get('/person', (req, res)=>{
    res.status(200).send({ name: req.name });
});

module.exports = server;

