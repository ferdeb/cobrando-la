const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/bank_accountController');

router.get('/', ctrl.listar);
router.get('/crear', ctrl.formCrear);
router.post('/crear', ctrl.crear);
router.get('/editar/:id', ctrl.formEditar);
router.post('/editar/:id', ctrl.editar);
router.get('/eliminar/:id', ctrl.eliminar);

module.exports = router;