const express = require('express');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());  // Gelen JSON verilerini işle

// Veritabanı bağlantısını kontrol et
sequelize.authenticate()
  .then(() => {
    console.log('Veritabanı bağlantısı başarılı.');
  })
  .catch((err) => {
    console.error('Veritabanı bağlantı hatası:', err);
  });

// Basit bir rota
app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
sequelize.sync()
  .then(() => {
    console.log('Veritabanı senkronize edildi.');
  })
  .catch((err) => {
    console.error('Veritabanı senkronizasyon hatası:', err);
  });
  const postRoutes = require('./routes/posts');
  app.use('/api/posts', postRoutes);
  