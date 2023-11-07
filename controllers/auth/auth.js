// controllers/auth/auth.js
function Register(req, res, next) {
    res.send('User registered successfully')
}

function Login(req, res, next) {
    res.send('User logged in successfully')
}

module.exports = {
    Register,
    Login
}
