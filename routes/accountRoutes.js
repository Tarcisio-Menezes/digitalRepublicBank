const router = require('express').Router();
const controller = require('../controllers/accountControllers');

router.get('/account/:id', controller.searchAccountById);
router.get('/account', controller.accountRegister);

module.exports = router;
