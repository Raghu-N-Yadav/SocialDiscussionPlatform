// src/controllers/discussionsController.js
const Discussion = require('../models/Discussion');

// POST /discussions
exports.createDiscussion = async (req, res) => {
    try {
        const newDiscussion = await Discussion.create(req.body);
        res.status(201).json(newDiscussion);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// PUT /discussions/:discussionId
exports.updateDiscussion = async (req, res) => {
    try {
        const { discussionId } = req.params;
        const [updated] = await Discussion.update(req.body, {
            where: { id: discussionId },
            returning: true,
        });
        if (updated === 0) {
            return res.status(404).json({ error: 'Discussion not found' });
        }
        const updatedDiscussion = await Discussion.findByPk(discussionId);
        res.json(updatedDiscussion);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE /discussions/:discussionId
exports.deleteDiscussion = async (req, res) => {
    try {
        const { discussionId } = req.params;
        const deletedCount = await Discussion.destroy({
            where: { id: discussionId },
        });
        if (deletedCount === 0) {
            return res.status(404).json({ error: 'Discussion not found' });
        }
        res.status(204).end();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// GET /discussions/tags/:tag
exports.getDiscussionsByTag = async (req, res) => {
    try {
        const { tag } = req.params;
        const discussions = await Discussion.findAll({
            where: {
                hashtags: { [db.Sequelize.Op.contains]: [tag] },
            },
        });
        res.json(discussions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// GET /discussions/search?text={text}
exports.getDiscussionsByText = async (req, res) => {
    try {
        const { text } = req.query;
        const discussions = await Discussion.findAll({
            where: { text: { [db.Sequelize.Op.like]: `%${text}%` } },
        });
        res.json(discussions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
