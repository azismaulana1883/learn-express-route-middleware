const express = require('express');
const router = express.Router();

const ArticleControllers = require('../../controllers/content/article');
const contentMiddleware = require('../../middleware/content/contentMiddleware')

router.get('/', (req, res, next) => {
    res.send('Welcome to the Content API');
});

// Create Article
router.post('/',[contentMiddleware.contentMiddleware], ArticleControllers.CreateArticle);

// Update Article
router.put('/:id', ArticleControllers.UpdateArticle);

// Delete Article
router.delete('/:id', ArticleControllers.DeleteArticle);

// Read Articles
router.get('/read', ArticleControllers.ReadArticle);

module.exports = router;
