const express = require('express');
const server = express();

const Routes = require('./routes');
server.use(express.json());
server.use(Routes);


server.listen(3333, function(){
    console.log('to on!');
});