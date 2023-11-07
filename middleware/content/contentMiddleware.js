

function contentMiddleware(req, res, next) {
    const { article, id } = req.body;

    if ( !article || !id) {
        return res.status(404).json({
            message: 'Error data not complete',
            text: 'Data tidak ada',
        });
    }

    next();
}

module.exports = {
    contentMiddleware
};
