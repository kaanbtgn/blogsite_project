const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Tüm gönderileri listele
router.get('/', async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

// Yeni gönderi oluştur
router.post('/', async (req, res) => {
  const newPost = await Post.create(req.body);
  res.json(newPost);
});

module.exports = router;
