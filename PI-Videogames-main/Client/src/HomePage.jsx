
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoGames, filterByGenre, orderBy, setPage } from './path-to-your-redux-actions';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const { videoGames, genres, orderByOptions, currentPage } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchVideoGames(currentPage));
  }, [dispatch, currentPage]);

  const handleFilterByGenre = (selectedGenre) => {
    dispatch(filterByGenre(selectedGenre));
  };

  const handleOrderBy = (selectedOption) => {
    dispatch(orderBy(selectedOption));
  };

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  return (
    <div>
      <h1>Home Page</h1>
      {/* SearchBar */}
      {/* ... Implementa tu SearchBar aquí ... */}

      {/* Filter and Order Options */}
      <div>
        <label>Filtrar por Género:</label>
        <select onChange={(e) => handleFilterByGenre(e.target.value)}>
          <option value="">Todos</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <label>Ordenar por:</label>
        <select onChange={(e) => handleOrderBy(e.target.value)}>
          {orderByOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Video Game List */}
      <div>
        {videoGames.map((game) => (
          <Link key={game.id} to={`/detail/${game.id}`}>
            <div>
              <img src={game.image} alt={game.name} />
              <h3>{game.name}</h3>
              <p>Géneros: {game.genres.join(', ')}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div>
        {/* Implementa tu componente de paginación aquí */}
        {/* Puedes usar una librería como react-paginate o implementar tu propio componente */}
      </div>
    </div>
  );
};

export default HomePage;
