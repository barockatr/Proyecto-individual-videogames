import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import LandingPage from './pages/LandingPage';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import FormPage from './pages/FormPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/form" component={FormPage} />
      </Switch>
      <Nav />
    </Router>
  );
};
export default App;