// src/routes/discussions.js
const express = require('express');
const router = express.Router();
const discussionsController = require('../controllers/discussionsController');

// POST /discussions
router.post('/', discussionsController.createDiscussion);

// PUT /discussions/:discussionId
router.put('/:discussionId', discussionsController.updateDiscussion);

// DELETE /discussions/:discussionId
router.delete('/:discussionId', discussionsController.deleteDiscussion);

// GET /discussions/tags/:tag
router.get('/tags/:tag', discussionsController.getDiscussionsByTag);

// GET /discussions/search?text={text}
router.get('/search', discussionsController.getDiscussionsByText);

module.exports = router;
