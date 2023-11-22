// App.jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './path-to-your-redux-store';
import LandingPage from './path-to-your-LandingPage-component';
import Card from './assets/components/Card';
import HomePage from './HomePage';

function App() {
  return (
    <>
      <h1>Aplicacion Videogames</h1>
      <h2>ESTE ES UN EJEMPLO</h2>
      <button>"add"</button>
      <div>
        <Card
          image="C:\Users\Antonio\Desktop\Proyecto-individual-videogames\videogames\src\assets\components\videogame.png"
          description="Una descripción"
          name="Nombre del elemento"
          rating={3}
          platform="Plataforma"
          releaseDate="01/01/2023"
        />
      </div>
    </>
  );
}

// index.jsx
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" component={App} />
        {/* Agrega más rutas según tus necesidades */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
