const {Router} = require('express');

const UsersRouter = require('./user.routes');

const Routes = Router();

Routes.use('/users', UsersRouter);

module.exports = Routes;