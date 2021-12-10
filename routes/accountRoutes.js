const router = require('express').Router();
const controller = require('../controllers/accountControllers');

router.get('/account/:id', controller.searchAccountById);
router.post('/account', controller.accountRegister);

module.exports = router;
