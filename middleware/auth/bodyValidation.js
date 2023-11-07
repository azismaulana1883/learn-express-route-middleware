// middleware/auth/bodyValidation.js

function bodyValidation(req, res, next) {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(404).json({
            message: 'Error data not complete',
            text: 'Data tidak ada',
        });
    }
    next();
}

module.exports = {
    bodyValidation
};
