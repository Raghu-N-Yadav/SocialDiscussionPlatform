// src/controllers/usersController.js
const User = require('../models/User');

// POST /users
exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// PUT /users/:userId
exports.updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const [updated] = await User.update(req.body, {
            where: { id: userId },
            returning: true,
        });
        if (updated === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        const updatedUser = await User.findByPk(userId);
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE /users/:userId
exports.deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const deletedCount = await User.destroy({
            where: { id: userId },
        });
        if (deletedCount === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(204).end();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// GET /users
exports.listUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// GET /users/search?name={name}
exports.searchUserByName = async (req, res) => {
    try {
        const { name } = req.query;
        const users = await User.findAll({
            where: { name: { [db.Sequelize.Op.like]: `%${name}%` } },
        });
        res.json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
