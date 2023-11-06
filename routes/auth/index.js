const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../../middleware/auth/bodyValidation')

const AuthControllers = require('../../controllers/auth/auth');

router.get('/', (req, res, next) => {
    res.send('Welcome to the Auth API');
});

// Register
router.post('/register', [AuthMiddleware.bodyValidation], AuthControllers.Register);

// Login
router.post('/login',[AuthMiddleware.bodyValidation], AuthControllers.Login);

module.exports = router;
