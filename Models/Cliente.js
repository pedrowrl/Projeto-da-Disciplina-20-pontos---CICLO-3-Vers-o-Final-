/* 
  Alunos:
   Pedro Wilson Rodrigues de Lima - 2020267
   Marcos Vinicius Fernandes Alves - 2021030
*/

const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  dependentes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' }]
});

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;
