// src/config/database.js
const { Sequelize } = require('sequelize');

// Adjust the connection parameters as per your PostgreSQL setup
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    // Additional options like port, logging, etc.
});

module.exports = sequelize;
