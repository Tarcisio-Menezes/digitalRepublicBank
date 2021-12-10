const express = require('express');
const cors = require('cors');
const accountRoutes = require('../routes/accountRoutes');
const accountMiddleware = require('../middlewares/accountMiddlewares');
const transactionRoutes = require('../routes/transactionRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(accountRoutes);
app.use(accountMiddleware);

app.use(transactionRoutes);

module.exports = app;
