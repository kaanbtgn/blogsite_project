const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactInfo: {
    type: DataTypes.STRING
  },
  skills: {
    type: DataTypes.ARRAY(DataTypes.STRING)  // Bir dizi yetenek
  },
  professionalAreas: {
    type: DataTypes.ARRAY(DataTypes.STRING)  // Çalışma alanları
  }
});

module.exports = User;
