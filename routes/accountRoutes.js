const router = require('express').Router();
const controller = require('../controllers/accountControllers');

router.get('/account/:id', controller.searchAccountById);

module.exports = router;
