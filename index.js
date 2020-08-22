const express = require('express');
const server = express();

server.get('/', function(request, response){
    response.send('<h1>Aooobaa!</h1>');
});




server.listen(3333, function(){
    console.log('to on!');
});