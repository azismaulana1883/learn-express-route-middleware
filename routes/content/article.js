const express = require('express');
const router = express.Router();

const ArticleControllers = require('../../controllers/content/article');
const contentMiddleware = require('../../middleware/content/contentMiddleware')

// Read Articles
router.get('/', ArticleControllers.ReadArticle);

// Create Article
router.post('/',[contentMiddleware.contentMiddleware], ArticleControllers.CreateArticle);

// Update Article
router.put('/:id', ArticleControllers.UpdateArticle);

// Delete Article
router.delete('/:id', ArticleControllers.DeleteArticle);


// show single article
router.get('/:id', ArticleControllers.Show);

module.exports = router;
