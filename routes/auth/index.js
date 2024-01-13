const express = require('express');
const authrouter = express.Router();
const userAuthController = require('../../controllers/Auth/index')

authrouter.post('/signup', userAuthController.CreateUser);
authrouter.post('/verification', userAuthController.VerifyUser);
authrouter.post('/signin', userAuthController.LogIn);

module.exports = authrouter;