// controllers/auth/auth.js
function Register(req, res, next) {
    // Handle user registration logic here
    res.send('User registered successfully')
}

function Login(req, res, next) {
    // Handle user login logic here
    res.send('User logged in successfully')
}

module.exports = {
    Register,
    Login
}
