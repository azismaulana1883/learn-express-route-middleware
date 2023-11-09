const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/user/user');
const AuthMiddleware = require('../middleware/auth/bodyValidation');

// Main Routing
router.get('/', (req, res, next) => {
    res.send('Welcome to the Users API');
});

// auth user
const AuthRoutes = require('./auth/index')
router.use('/auth', AuthRoutes)

// JWT Check
const {verifyToken,verifyJWTToken} = require('../middleware/JWT')

// content
const Content = require('./content/article')
router.use('/content',[verifyToken, verifyJWTToken],Content)

// user
const user = require('./users/index')
router.use('/users', user)

module.exports = router;
