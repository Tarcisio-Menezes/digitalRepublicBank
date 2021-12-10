const router = require('express').Router();
const controller = require('../controllers/transactionControllers');

router.post('/transaction', controller.cashTranference);
router.post('/transaction/deposit', controller.cashDeposit);

module.exports = router;
