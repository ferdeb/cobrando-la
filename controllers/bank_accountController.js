const { Bank_Account } = require('../models');

// Crear - CREATE

exports.formCrear = (req, res) => {
    res.render(bank_accounts/crear)
}

exports.crear = async (req, res) => {
    res.render(bank_accounts)
}

// Listar - SELECT - Read

exports.listar = async (req, res) => {
    const bank_accounts = await Bank_Account.findAll;
    res.render('bank_accounts/index', {
        bank_accounts,
        error: req.query.error
    })
}

// Actualizar - UPDATE

exports.formEditar = async (req, res) => {
    const bank_account = await Bank_Account.findByPk(req.params.id);
    res.render('bank_accounts/editar', { cliente });
}

exports.editar = async (req, res) => {
    await Bank_Account.update(req.body, {
        where: {phone_number: req.params.id}
    });
    res.redirect('/bank_accounts') // Preguntarle al chalan si esto redirige automaticamente al ser completada la op. intuyo que si xd
}

// Eliminar - DELETE

exports.eliminar = async (req, res) => {
    try {
        await Bank_Account.destroy({ where: { phone_number: req.params.id } });
        res.redirect('/bank_accounts')
    }
    catch (error) {
        if (error.parent && error.parent.errno === 1451) { // Esto es un error relacionado a la foreign key
            res.redirect('/bank_accounts?errno=relacion')
        } else {
            res.redirect('/bank_accounts?errno=desconocido')
        }
    }
}