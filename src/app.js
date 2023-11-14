const express = require('express');
const app = express();
const hashRoutes = require('../routes/hashRoutes');

//middleware
app.use(express.json());

//User POST ROUTE
app.use('/api/hash', hashRoutes);

module.exports = app;
