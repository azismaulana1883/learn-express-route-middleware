// middleware/auth/bodyValidation.js

function bodyValidation(req, res, next) {
    const { username, password, email, id } = req.body;

    if (!username || !password || !email || !id) {
        return res.status(404).json({
            message: 'Error data not complete',
            text: 'Data tidak ada',
        });
    }

    // Jika data lengkap, lanjutkan ke rute berikutnya
    next();
}

module.exports = {
    bodyValidation
};
