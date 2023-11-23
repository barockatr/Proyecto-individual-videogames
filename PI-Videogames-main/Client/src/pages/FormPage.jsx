import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
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

  useEffect(() => {
    fetchData();
  }, [currentPage, pageSize]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.rawg.io/api/games', {
        params: {
          page: currentPage,
          page_size: pageSize,
        },
      });
      const { results, count } = response.data;
      // Actualizar el estado con los datos paginados y el número total de elementos
      // setPaginatedData(results);
      setTotalItems(count);
    } catch (error) {
      console.error(error);
      // Manejar errores de la solicitud
    }
  };

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
        {/* Resto de los campos del formulario */}
        <div>
          {/* Implementa tu componente de paginación aquí */}
          {/* Puedes usar una librería como react-paginate o implementar tu propio componente */}
          <Pagination
            currentPage={currentPage}
            pageSize={pageSize}
            totalItems={totalItems}
            onPageChange={setCurrentPage}
          />
        </div>
        <button type="submit">Crear Videojuego</button>
      </form>
    </div>
  );
};

export default FormPage;