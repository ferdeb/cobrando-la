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
  }
});

module.exports = Bank_Account;