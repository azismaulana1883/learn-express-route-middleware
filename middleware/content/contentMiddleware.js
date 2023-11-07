function contentMiddleware(req, res, next) {
    const { title, description } = req.body;

    if ( !title || !description) {
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
