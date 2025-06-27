const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/db');

// Rutas

const bank_accountRoutes = require('./routes/bank_accountRoutes');

// Configuracion de express

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Activar rutas

app.use('/bank_accounts', bank_accountRoutes);

// Ruta raíz opcional
app.get('/', (req, res) => {
    res.redirect('/bank_accounts'); // Redirige a /bank_accounts por defecto
});
  
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