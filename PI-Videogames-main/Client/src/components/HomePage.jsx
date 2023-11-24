import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoGames, filterByGenre, orderBy, setPage } from '/workspaces/Proyecto-individual-videogames/PI-Videogames-main/api/src/controllers/videogameController.js'
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const { genres, orderByOptions, currentPage, pageSize } = useSelector((state) => state);
  const [searchTerm, setSearchTerm] = useState('');
  const [videoGamesData, setVideoGamesData] = useState([]);

  useEffect(() => {
    const fetchVideoGamesData = async () => {
      try {
        const response = await fetchVideoGames(currentPage);
        setVideoGamesData(response); // Almacenar los datos de los videojuegos en el estado local
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoGamesData();
  }, [dispatch, currentPage]);

  const totalPages = Math.ceil(videoGamesData.length / pageSize);

  const handleFilterByGenre = (selectedGenre) => {
    dispatch(filterByGenre(selectedGenre));
  };

  const handleOrderBy = (selectedOption) => {
    dispatch(orderBy(selectedOption));
  };

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchVideoGames(currentPage, searchTerm));
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Buscar videojuego por nombre" />
        <button type="submit">Buscar</button>
      </form>
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
      <div>
        {videoGamesData.map((game) => (
          <Link key={game.id} to={`/detail/${game.id}`}>
            <div>
              <img src={game.image} alt={game.name} />
              <h3>{game.name}</h3>
              <p>Géneros: {game.genres.join(', ')}</p>
            </div>
          </Link>
        ))}
      </div>
      <div>
        {pageNumbers.map((pageNumber) => (
          <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;