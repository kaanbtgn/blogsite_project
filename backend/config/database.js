const { Sequelize } = require('sequelize');
require('dotenv').config(); // .env dosyasından ortam değişkenlerini alır

// PostgreSQL bağlantısı
const sequelize = new Sequelize(
  process.env.DB_NAME,  // Veritabanı adı
  process.env.DB_USER,  // Kullanıcı adı
  process.env.DB_PASSWORD,  // Şifre
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',  // PostgreSQL veritabanı kullanılıyor
    logging: false  // Konsolda SQL çıktısı istemiyorsanız kapatabilirsiniz
  }
);

module.exports = sequelize;
