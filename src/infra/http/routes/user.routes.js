const {Router} = require('express');
const UserController = require('../../../modules/users/controllers/UserController')
const UsersRoutes = Router();

UsersRoutes.post('/', UserController.create);

module.exports = UsersRoutes;