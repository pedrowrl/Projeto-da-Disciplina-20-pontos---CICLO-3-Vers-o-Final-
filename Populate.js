/* 
  Alunos:
   Pedro Wilson Rodrigues de Lima - 2020267
   Marcos Vinicius Fernandes Alves - 2021030
*/

const mongoose = require('mongoose');
const Filme = require('./models/Filme');
const Serie = require('./models/Serie');

mongoose.connect('mongodb://localhost:27017/streaming', { useNewUrlParser: true, useUnifiedTopology: true });

const filmes = [
  {
    titulo: 'Patrulha Canina',
    categoria: 'aventura',
    classificacao: 'livre',
    atores: [
      { nome: 'Ron Pardo' },
      { nome: 'Lilly Bartlam' },
      { nome: 'Gage Munroe' },
      { nome: 'Tristan Samuel' }
    ]
  },
  {
    titulo: 'Bob Sponja',
    categoria: 'comédia',
    classificacao: 'livre',
    atores: [
      { nome: 'Tom Kenny' },
      { nome: 'Bill Fagerbakke' },
      { nome: 'Doug Lawrence' },
      { nome: 'Clancy Brown' }
    ]
  },
  {
    titulo: 'Tropa de Elite',
    categoria: 'drama',
    classificacao: '+18',
    atores: [
      { nome: 'Wagner Moura' },
      { nome: 'André Ramiro' },
      { nome: 'Caio Junqueira' },
      { nome: 'Fernanda Machado' }
    ]
  },
  {
    titulo: 'Cidade de Deus',
    categoria: 'drama',
    classificacao: '+18',
    atores: [
      { nome: 'Alexandre Rodrigues' },
      { nome: 'Alice Braga' },
      { nome: 'Douglas Silva' },
      { nome: 'Phellipe Haagensen' }
    ]
  }
];

const series = [
  {
    titulo: 'Sonic Boom',
    classificacao: 'livre',
    atores: [
      { nome: 'Roger Craig Smith' },
      { nome: 'Cindy Robinson' },
      { nome: 'Nika Futterman' },
      { nome: 'Mike Pollock' }
    ]
  },
  {
    titulo: 'Skylanders Academy',
    classificacao: 'livre',
    atores: [
      { nome: 'Justin Long' },
      { nome: 'Felicia Day' },
      { nome: 'DanTDM' },
      { nome: 'Greg Ellis' }
    ]
  },
  {
    titulo: 'Bojack Horseman',
    classificacao: '+18',
    atores: [
      { nome: 'Will Arnet' },
      { nome: 'Amy Sedaris' },
      { nome: 'Kristen Schaal' },
      { nome: 'J. K. Simmons' }
    ]
  },
  {
    titulo: 'Paradise Police',
    classificacao: '+18',
    atores: [
      { nome: 'Roger Black' },
      { nome: 'Dana Snyder' },
      { nome: 'Tom Kenny' },
      { nome: 'David Herman' }
    ]
  }
];

const populateDB = async () => {
  try {
    await Filme.deleteMany({});
    await Serie.deleteMany({});
    await Filme.insertMany(filmes);
    await Serie.insertMany(series);
    console.log('Database populated successfully!');
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    mongoose.connection.close();
  }
};

populateDB();
