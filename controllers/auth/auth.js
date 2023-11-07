// controllers/auth/auth.js
const UserModels = require('../../models').Users;

async function Register(req, res, next) {
    try {
        const { username, password, email, firstname, lastname } = req.body;

        let dataPassingToDB = {
            username: username,
            password: password,
            email: email,
            firstname: firstname,
            lastname: lastname
        }

        let createdData = await UserModels.create(dataPassingToDB);

        if (!createdData.dataValues) {
            res.status(400).send({
                message: 'Wrong username or password',
                statusCode: 400
            });
        } else {
            res.send({
                message: 'Success',
                statusCode: 200
            });
        }
    } catch (error) {
        next(error);
    }
}

async function Login(req, res, next) {
    try {
        const getUsers = await UserModels.findOne({
            where: {
                username: req.body.username,
                email: req.body.email
            }
        });
        console.log(getUsers)

        if (!getUsers) {
            res.status(400).send({
                message: "User not found",
                statusCode: 400
            });
            return;
        }

        if (req.body.password === getUsers.password) {
            res.send('User logged in successfully');
        } else {
            res.status(400).send({
                message: "Wrong username or password",
                statusCode: 400
            });
        }

        if (req.body.email !== getUsers.email) {
            res.status(400).json({
                message: "Wrong email",
                statusCode: 400
            });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    Register,
    Login
}
