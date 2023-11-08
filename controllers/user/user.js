// controllers/user/user.js
const UserModels = require('../../models').Users;

async function UpdateUser(req, res, next) {
    try {
        const userId = req.params.id;
        const { username, password } = req.body;
        const existingUser = await UserModels.findByPk(userId);

        if (!existingUser) {
            return res.status(404).json({
                message: 'User not found',
                statusCode: 404
            });
        }

        existingUser.username = username;
        existingUser.password = password;
        await existingUser.save();

        res.send('User updated successfully');
    } catch (error) {
        next(error);
    }
}

async function DeleteUser(req, res, next) {
 try {
        const userId = req.params.id; 
        const existingUser = await UserModels.findByPk(userId);

        if (!existingUser) {
            return res.status(404).json({
                message: 'User not found',
                statusCode: 404
            });
        }
        await existingUser.destroy();

        res.send('User deleted successfully');
    } catch (error) {
        next(error);
    }
}

async function ReadUser(req, res, next) {
    try {
        const users = await UserModels.findAll();
        res.json(users);
    } catch (error) {
        next(error);
    }
}

async function Show(req, res, next) {
    try {
        const userId = req.params.id; 
        const existingUser = await UserModels.findByPk(userId);
        
        if (!existingUser) {
            return res.status(404).json({
                message: 'User not found',
                statusCode: 404
            });
        } else {
            res.json(existingUser);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    UpdateUser,
    DeleteUser,
    ReadUser,
    Show
}
