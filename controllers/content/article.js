// controllers/content/article.js
function CreateArticle(req, res, next) {
    
    res.send('Article created successfully')
}

function UpdateArticle(req, res, next) {

    res.send('Article updated successfully')
}

function DeleteArticle(req, res, next) {

    res.send('Article deleted successfully')
}

function ReadArticle(req, res, next) {

    res.send('Here are the articles')
}

module.exports = {
    CreateArticle,
    UpdateArticle,
    DeleteArticle,
    ReadArticle
}
