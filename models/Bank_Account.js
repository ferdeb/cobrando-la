const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Bank_Account = sequelize.define('bank_account', {
   phone_number: {
    type: DataTypes.TEXT,
    primaryKey: true,
    allowNull: false,
    unique: true,
    validate: {
        is: /^[0-9]{10}$/ // Validacion de 0 al 10
      }
   },
   bank_name: {
    type: DataTypes.TEXT
   },
   clabe: {
    type: DataTypes.TEXT,
    allowNull: false
   },
   card_number: {
    type: DataTypes.TEXT
  },
  bank_account_number: {
    type: DataTypes.TEXT
  },  
},
 {
  tableName: 'bank_account',   // coincide con tu tabla en la base de datos :contentReference[oaicite:4]{index=4}
  timestamps: false       // desactiva createdAt y updatedAt :contentReference[oaicite:5]{index=5}
});

module.exports = Bank_Account;