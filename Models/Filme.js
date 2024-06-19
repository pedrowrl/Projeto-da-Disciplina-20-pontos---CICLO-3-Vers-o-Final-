/* 
  Alunos:
   Pedro Wilson Rodrigues de Lima - 2020267
   Marcos Vinicius Fernandes Alves - 2021030
*/

const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  categoria: { type: String, enum: ['comédia', 'drama', 'aventura', 'ficção'], required: true },
  classificacao: { type: String, enum: ['livre', '+18'], required: true },
  atores: [{ 
    nome: { type: String, required: true },
    nomeReal: String,
    biografia: String,
    dataNascimento: Date
  }]
});

const Filme = mongoose.model('Filme', FilmeSchema);

module.exports = Filme;

