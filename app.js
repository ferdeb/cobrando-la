const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/db');

// Rutas

const bank_accountRoutes = require('/routes/bank_accountRoutes');


sequelize.sync({force: false})
.then(() => {
    console.log('Base de datos conectada y sincronizada');
    app.listen(3000, () => {
        console.log('Server corriendo en http://localhost:3000')
    });
})
.catch(err => {
    console.error('ERROR AL CONECTARSE') // Uso de logger xd
})