import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Home/Landing';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Landing }></Route>
    </Router>
  );
}

export default App;
