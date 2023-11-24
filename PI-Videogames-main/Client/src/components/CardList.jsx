import React, { useEffect, useState } from 'react';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Lógica para obtener los datos de las cards aleatorias
    const fetchData = async () => {
      try {
        // Realizar la llamada a la API para obtener los datos de las tarjetas
        const response = await fetch('https://api.rawg.io/api/games');
        const data = await response.json();

        // Actualizar el estado de las tarjetas con los datos obtenidos
        setCards(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id} className="card">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;