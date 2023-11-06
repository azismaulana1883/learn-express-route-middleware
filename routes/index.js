const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/user/user');
const AuthMiddleware = require('../middleware/auth/bodyValidation'); // Import middleware

// Welcome message for the users route
router.get('/', (req, res, next) => {
    res.send('Welcome to the Users API');
});

// auth user
const AuthRoutes = require('./auth/index')
router.use('/auth', AuthRoutes)

// content
const Content = require('./content/article')
router.use('/content', Content)

// user
const user = require('./users/index')
router.use('/users', user)

module.exports = router;
