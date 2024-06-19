/* 
  Alunos:
   Pedro Wilson Rodrigues de Lima - 2020267
   Marcos Vinicius Fernandes Alves - 2021030
*/

const express = require('express');
const mongoose = require('mongoose');
const filmesRouter = require('./routes/filmes');
const seriesRouter = require('./routes/series');
const clientesRouter = require('./routes/clientes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/streaming', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.use('/filmes', filmesRouter);
app.use('/series', seriesRouter);
app.use('/clientes', clientesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

