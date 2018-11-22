import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import './App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <div>
        <Header />
        <NavBar />

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
