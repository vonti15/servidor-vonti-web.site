const express = require('express');

const app = express();

// Archivos de rutas
app.use(require('./home'));
app.use(require('./login'));

module.exports = app;