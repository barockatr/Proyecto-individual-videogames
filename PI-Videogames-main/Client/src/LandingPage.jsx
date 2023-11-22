import backgroundImage from './path-to-your-image.jpg';

const LandingPage = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundSize: 'cover' }}>
      <h1>Bienvenido a Mi Aplicación</h1>
      <button>Ingresar</button>
    </div>
  );
};

export default LandingPage;
