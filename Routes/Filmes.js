/* 
  Alunos:
   Pedro Wilson Rodrigues de Lima - 2020267
   Marcos Vinicius Fernandes Alves - 2021030
*/

const express = require('express');
const router = express.Router();
const Filme = require('../models/Filme');

router.get('/', async (req, res) => {
  try {
    const filmes = await Filme.find();
    res.json(filmes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

