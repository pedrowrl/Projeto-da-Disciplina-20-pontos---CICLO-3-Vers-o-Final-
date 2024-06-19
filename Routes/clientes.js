/* 
  Alunos:
   Pedro Wilson Rodrigues de Lima - 2020267
   Marcos Vinicius Fernandes Alves - 2021030
*/

const express = require('express');
const router = express.Router();
const Visualizacao = require('../models/Visualizacao');

router.get('/:clienteId/visualizacoes', async (req, res) => {
  try {
    const visualizacoes = await Visualizacao.find({ cliente: req.params.clienteId })
      .populate('filme')
      .populate('serie');
    res.json(visualizacoes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

