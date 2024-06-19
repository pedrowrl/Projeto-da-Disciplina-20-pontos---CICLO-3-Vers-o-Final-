/* 
  Alunos:
   Pedro Wilson Rodrigues de Lima - 2020267
   Marcos Vinicius Fernandes Alves - 2021030
*/

const express = require('express');
const router = express.Router();
const Serie = require('../models/Serie');

router.get('/', async (req, res) => {
  try {
    const series = await Serie.find();
    res.json(series);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
