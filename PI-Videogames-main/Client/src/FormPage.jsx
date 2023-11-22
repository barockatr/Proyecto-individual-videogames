jsx
import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    platforms: '',
    releaseDate: '',
    rating: '',
    genres: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenreChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      genres: [...prevData.genres, value],
    }));
  };

  const handleCreateGame = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Lógica para crear el nuevo videojuego
      // ...
      // Resetear el formulario
      setFormData({
        name: '',
        image: '',
        description: '',
        platforms: '',
        releaseDate: '',
        rating: '',
        genres: [],
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validaciones personalizadas
    if (formData.name.trim() === '') {
      errors.name = 'El nombre del videojuego es requerido';
    }

    // Agrega más validaciones según tus requisitos

    return errors;
  };

  return (
    <div>
      <h1>Formulario de Creación</h1>
      <form onSubmit={handleCreateGame}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Imagen:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Plataformas:</label>
          <input type="text" name="platforms" value={formData.platforms} onChange={handleChange} />
        </div>
        <div>
          <label>Fecha de Lanzamiento:</label>
          <input type="date" name="releaseDate" value={formData.releaseDate} onChange={handleChange} />
        </div>
        <div>
          <label>Rating:</label>
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} />
        </div>
        <div>
          <label>Géneros:</label>
          <select multiple name="genres" value={formData.genres} onChange={handleGenreChange}>
            <option value="accion">Acción</option>
            <option value="aventura">Aventura</option>
            <option value="estrategia">Estrategia</option>
            {/* Agrega más opciones de género según tus necesidades */}
          </select>
        </div>
        <button type="submit">Crear Videojuego</button>
      </form>
    </div>
  );
};

export default FormPage;