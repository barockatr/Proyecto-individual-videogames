import React, { useState } from 'react';
import axios from 'axios';

const DeleteVideogame = () => {
  const [videogameId, setVideogameId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      // Realizar la solicitud DELETE al servidor
      const response = await axios.delete(`http://localhost:3001/deleteVideogame/${videogameId}`);

      // Actualizar el estado con el mensaje del servidor
      setMessage(response.data.message);
    } catch (error) {
      // Manejar errores, por ejemplo, mostrando un mensaje de error
      setMessage('Error al eliminar el videojuego');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Delete Videogame</h2>
      <label htmlFor="videogameId">Videogame ID:</label>
      <input
        type="text"
        id="videogameId"
        value={videogameId}
        onChange={(e) => setVideogameId(e.target.value)}
      />
      <button onClick={handleDelete}>Eliminar Videogame</button>
      <p>{message}</p>
    </div>
  );
};

export default DeleteVideogame;
la 