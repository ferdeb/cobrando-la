const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/bank_account.controller');

router.get('/', ctrl.list);
router.get('/list/:phone_number', ctrl.viewOne);
router.get('/create', ctrl.formCreate);
router.post('/create', ctrl.create);
router.get('/edit/:id', ctrl.formEdit);
router.post('/edit/:id', ctrl.edit);
router.get('/delete/:id', ctrl.delete);

module.exports = router;