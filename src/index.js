// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const usersRoutes = require('./routes/users');
const discussionsRoutes = require('./routes/discussions');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/users', usersRoutes);
app.use('/discussions', discussionsRoutes);

// Database connection test
db.authenticate()
    .then(() => {
        console.log('Database connected...');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
