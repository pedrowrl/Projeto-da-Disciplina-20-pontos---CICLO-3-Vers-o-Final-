/* 
  Alunos:
   Pedro Wilson Rodrigues de Lima - 2020267
   Marcos Vinicius Fernandes Alves - 2021030
*/

const mongoose = require('mongoose');

const SerieSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  classificacao: { type: String, enum: ['livre', '+18'], required: true },
  atores: [{ 
    nome: { type: String, required: true },
    nomeReal: String,
    biografia: String,
    dataNascimento: Date
  }]
});

const Serie = mongoose.model('Serie', SerieSchema);

module.exports = Serie;
