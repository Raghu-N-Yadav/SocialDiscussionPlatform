// src/routes/users.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// POST /users
router.post('/', usersController.createUser);

// PUT /users/:userId
router.put('/:userId', usersController.updateUser);

// DELETE /users/:userId
router.delete('/:userId', usersController.deleteUser);

// GET /users
router.get('/', usersController.listUsers);

// GET /users/search?name={name}
router.get('/search', usersController.searchUserByName);

module.exports = router;
