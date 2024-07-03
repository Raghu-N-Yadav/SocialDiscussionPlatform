// src/models/Discussion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Discussion = sequelize.define('Discussion', {
    text: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING, // Assuming storing image path as a string
        allowNull: true,
    },
    hashtags: {
        type: DataTypes.ARRAY(DataTypes.STRING), // Array of strings for hashtags
        allowNull: true,
    },
    createdOn: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Discussion;
