const UserContents = require('../../models').Contents;
async function CreateArticle(req, res, next) {
    try {
        const { title, description } = req.body;

        let dataPassingToDB = {
            title: title,
            description: description,
        }

        let createdData = await UserContents.create(dataPassingToDB);

        if (!createdData.dataValues) {
            res.status(400).send({
                message: 'Wrong Title or Description',
                statusCode: 400
            });
        } else {
            res.send({
                message: 'Success add content',
                statusCode: 200
            });
        }
    } catch (error) {
        next(error);
    }
}

async function UpdateArticle(req, res, next) {
    try {
        const articleId = req.params.id;
        const { title, description } = req.body;
        const existingArticle = await UserContents.findByPk(articleId);

        if (!existingArticle) {
            return res.status(404).json({
                message: 'Article not found',
                statusCode: 404
            });
        }

        existingArticle.title = title;
        existingArticle.description = description;
        await existingArticle.save();

        res.send('Article updated successfully');
    } catch (error) {
        next(error);
    }
}

async function DeleteArticle(req, res, next) {
    try {
        const articleId = req.params.id; 
        const existingArticle = await UserContents.findByPk(articleId);

        if (!existingArticle) {
            return res.status(404).json({
                message: 'Article not found',
                statusCode: 404
            });
        }
        await existingArticle.destroy();

        res.send('Article deleted successfully');
    } catch (error) {
        next(error);
    }
}

async function ReadArticle(req, res, next) {
    try {
        const articles = await UserContents.findAll();

        res.json(articles);
    } catch (error) {
        next(error);
    }
}

async function Show(req, res, next) {
    try {
        const articleId = req.params.id; 
        const existingArticle = await UserContents.findByPk(articleId);
        
        if (!existingArticle) {
            return res.status(404).json({
                message: 'Article not found',
                statusCode: 404
            });
        } else {
            res.json(existingArticle);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    CreateArticle,
    UpdateArticle,
    DeleteArticle,
    ReadArticle,
    Show
}
