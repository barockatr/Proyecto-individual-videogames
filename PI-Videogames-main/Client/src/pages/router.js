import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';   
import FormPage from './FormPage';
import DetailPage from './DetailPage';
import HomePage from './HomePage';

   const RouterComponent = () => {
     return (
       <Router>
         <Switch>
           <Route exact path="/" component={LandingPage} />
           <Route path="/registro" component={FormPage} />
           <Route path="/" component={DetailPage} />
           <Route path="/" component={HomePage} />
         </Switch>
       </Router>
     );
   };

   export default RouterComponent;