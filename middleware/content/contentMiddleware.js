// middleware/auth/bodyValidation.js

function contentMiddleware(req, res, next) {
    const { article, id } = req.body;

    if ( !article || !id) {
        return res.status(404).json({
            message: 'Error data not complete',
            text: 'Data tidak ada',
        });
    }

    // Jika data lengkap, lanjutkan ke rute berikutnya
    next();
}

module.exports = {
    contentMiddleware
};
