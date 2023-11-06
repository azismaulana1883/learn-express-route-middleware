const express = require('express');
const router = express.Router();

const ArticleControllers = require('../../controllers/content/article');
const contentMiddleware = require('../../middleware/content/contentMiddleware')

router.get('/', (req, res, next) => {
    res.send('Welcome to the Content API');
});

// Create Article
router.post('/create',[contentMiddleware.contentMiddleware], ArticleControllers.CreateArticle);

// Update Article
router.put('/update/:id', ArticleControllers.UpdateArticle);

// Delete Article
router.delete('/delete/:id', ArticleControllers.DeleteArticle);

// Read Articles
router.get('/read', ArticleControllers.ReadArticle);

module.exports = router;
