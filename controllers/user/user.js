// controllers/user/user.js
function CreateUser(req, res, next) {
    // Handle user creation logic here
    res.send('User created successfully')
}

function UpdateUser(req, res, next) {
    
    res.send('User updated successfully')
}

function DeleteUser(req, res, next) {

    res.send('User deleted successfully')
}

function ReadUser(req, res, next) {
    
    res.send('Here are the users')
}

module.exports = {
    CreateUser,
    UpdateUser,
    DeleteUser,
    ReadUser
}
