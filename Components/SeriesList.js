/* 
  Alunos:
   Pedro Wilson Rodrigues de Lima - 2020267
   Marcos Vinicius Fernandes Alves - 2021030
*/

import React, { useState, useEffect } from 'react';

const SeriesList = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch('/series');
        const data = await response.json();
        setSeries(data);
      } catch (error) {
        console.error('Error fetching series:', error);
      }
    };

    fetchSeries();
  }, []);

  return (
    <div>
      <h2>Séries Disponíveis</h2>
      <ul>
        {series.map(serie => (
          <li key={serie._id}>
            <strong>{serie.titulo}</strong> - {serie.classificacao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeriesList;
