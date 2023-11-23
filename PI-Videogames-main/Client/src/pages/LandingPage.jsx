import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import CardList from './CardList';

const LandingPage = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    // Lógica de autenticación aquí
    setAuthenticated(true);
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <h1>Bienvenido a mi aplicación de videojuegos</h1>
      <img src="ruta_de_la_imagen" alt="Imagen representativa" />
      <button onClick={handleLogin}>Ingresar</button>
      <Link to="/registro">Registrarse</Link>
      {/* Agrega el enlace a la página de registro */}
      <CardList />
      {/* Agrega el componente CardList para mostrar las cards */}
    </div>
  );
};

export default LandingPage;