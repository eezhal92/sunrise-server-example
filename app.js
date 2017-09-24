const express = require('express');
const cors = require('cors');
const paginateAlumnus = require('./alumnus');

const app = express();

app.use(cors('*'));

app.get('/alumnus', (req, res) => {
  res.json(paginateAlumnus({ page: parseInt(req.query.page), limit: parseInt(req.query.limit) || undefined }));
});

app.get('*', (req, res) => {
  res.status(404).send('Endpoint Not found');
});

module.exports = app;
