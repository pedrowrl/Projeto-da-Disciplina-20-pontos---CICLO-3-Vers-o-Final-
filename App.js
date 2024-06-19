/* 
  Alunos:
   Pedro Wilson Rodrigues de Lima - 2020267
   Marcos Vinicius Fernandes Alves - 2021030
*/

import React from 'react';
import FilmesList from './components/FilmesList';
import SeriesList from './components/SeriesList';
import VisualizacoesCliente from './components/VisualizacoesCliente';

const App = () => {
  const clienteId = '60c3d85a8c0d1a083c1f62e4';

  return (
    <div>
      <h1>Aplicação de Streaming de Vídeo</h1>
      <FilmesList />
      <SeriesList />
      <VisualizacoesCliente clienteId={clienteId} />
    </div>
  );
};

export default App;
