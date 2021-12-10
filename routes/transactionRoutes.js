const router = require('express').Router();
const controller = require('../controllers/transactionControllers');

router.post('/transaction', controller.cashTranference);

module.exports = router;
