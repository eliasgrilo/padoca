import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Patisserie from './pages/Patisserie';
import Bakery from './pages/Bakery';
import Cafe from './pages/Cafe';
import Discover from './pages/Discover';
import Shop from './pages/Shop';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/patisserie" component={Patisserie} />
        <Route path="/bakery" component={Bakery} />
        <Route path="/cafe" component={Cafe} />
        <Route path="/discover" component={Discover} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </Router>
  );
};

export default App;