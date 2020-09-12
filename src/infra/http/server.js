const express = require('express');

const server = express();

const Routes = require('./routes');

server.use(express.json());
server.use(Routes);

server.listen(3333, () => {
  /* eslint-disable-next-line */
  console.log('to on!');
});
