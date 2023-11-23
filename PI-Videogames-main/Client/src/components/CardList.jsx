import React, { useEffect, useState } from 'react';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Lógica para obtener los datos de las cards aleatorias
    // Puedes utilizar una API o un arreglo de datos estáticos

    // Ejemplo de datos estáticos
    const data = [
      { id: 1, title: 'Card 1', description: 'Descripción de la Card 1' },
      { id: 2, title: 'Card 2', description: 'Descripción de la Card 2' },
      { id: 3, title: 'Card 3', description: 'Descripción de la Card 3' },
    ];

    // Simulamos una llamada asíncrona con un timeout
    setTimeout(() => {
      setCards(data);
    }, 2000);
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