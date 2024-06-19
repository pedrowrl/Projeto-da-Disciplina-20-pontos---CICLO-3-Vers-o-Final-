/* 
  Alunos:
   Pedro Wilson Rodrigues de Lima - 2020267
   Marcos Vinicius Fernandes Alves - 2021030
*/

import React, { useState, useEffect } from 'react';

const FilmesList = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const fetchFilmes = async () => {
      try {
        const response = await fetch('/filmes');
        const data = await response.json();
        setFilmes(data);
      } catch (error) {
        console.error('Error fetching filmes:', error);
      }
    };

    fetchFilmes();
  }, []);

  return (
    <div>
      <h2>Filmes Disponíveis</h2>
      <ul>
        {filmes.map(filme => (
          <li key={filme._id}>
            <strong>{filme.titulo}</strong> - {filme.categoria} - {filme.classificacao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmesList;
