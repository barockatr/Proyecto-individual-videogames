import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const [gameData, setGameData] = useState(null);
  const [rating, setRating] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}`);
        const data = await response.json();
        setGameData(data);
      } catch (error) {
        console.error('Error al obtener los detalles del juego:', error);
      }
    };
    fetchData();
  }, [id]);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  if (!gameData) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalles del juego</h1>
      <h2>{gameData.name}</h2>
      <img src={gameData.image} alt={gameData.name} />
      <p>Descripción: {gameData.description}</p>
      <p>Calificación: {rating}</p>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            onClick={() => handleRating(value)}
            style={{ cursor: 'pointer' }}
          >
            {value <= rating ? '★' : '☆'}
          </span>
        ))}
      </div>
      <button onClick={handleFavorite}>
        {isFavorite ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
      </button>
    </div>
  );
};

export default DetailPage;