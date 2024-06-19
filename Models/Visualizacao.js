/* 
  Alunos:
   Pedro Wilson Rodrigues de Lima - 2020267
   Marcos Vinicius Fernandes Alves - 2021030
*/

const mongoose = require('mongoose');

const VisualizacaoSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  filme: { type: mongoose.Schema.Types.ObjectId, ref: 'Filme' },
  serie: { type: mongoose.Schema.Types.ObjectId, ref: 'Serie' },
  data: { type: Date, default: Date.now }
});

const Visualizacao = mongoose.model('Visualizacao', VisualizacaoSchema);

module.exports = Visualizacao;

