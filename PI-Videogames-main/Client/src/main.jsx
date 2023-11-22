// main.jsx
import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import { LandingPage } from 'LandingPage.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        {/* Agrega más rutas según tus necesidades */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
