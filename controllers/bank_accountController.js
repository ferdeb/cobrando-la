const { Bank_Account } = require('../models');

// Listar - SELECT

exports.listar = async (req, res) => {
    const bank_accounts = await Bank_Account.findAll;
    res.render('bank_accounts/index', {
        bank_accounts,
        error: req.query.error
    })
}