jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
  const { id } = useParams();
  const [videogame, setVideogame] = useState(null);

  useEffect(() => {
    const fetchVideogame = async () => {
      try {
        const response = await axios.get(`/getVideogame/${id}`);
        setVideogame(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideogame();
  }, [id]);

  if (!videogame) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{videogame.title}</h1>
      <img src={videogame.image} alt={videogame.title} />
      <p>ID: {videogame.api_id}</p>
      <p>Plataformas: {videogame.platforms.join(', ')}</p>
      <p>Descripción: {videogame.description}</p>
      <p>Fecha de lanzamiento: {videogame.releaseDate}</p>
      <p>Rating: {videogame.rating}</p>
      <p>Géneros: {videogame.genres.join(', ')}</p>
    </div>
  );
};

export default DetailPage;